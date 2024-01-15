const express=require('express')
const router=express.Router()
const conexion=require('./database/db')



router.get('/',(req,res)=>{
    res.render('index')
})
router.get('/create', (req, res) => {
    const buscar = req.query.buscar;

    // Verifica si hay un valor en el campo de búsqueda
    if (buscar) {
        // Si hay un valor, realiza la consulta con filtro
        conexion.query(`SELECT * FROM empleados WHERE departamento LIKE '%${buscar}%'`, (err, resultados) => {
            if (err) {
                throw err;
            } else {
                res.render('create', { resultados: resultados, buscar: buscar });
            }
        });
    } else {
        // Si no hay un valor, muestra todos los empleados
        conexion.query('SELECT * FROM empleados', (err, resultados) => {
            if (err) {
                throw err;
            } else {
                res.render('create', { resultados: resultados });
            }
        });
    }
});
router.post('/create', (req, res) => {
    const buscar = req.body.buscar;

    // Realiza alguna lógica de procesamiento si es necesario

    // Redirige a la misma ruta sin el parámetro de búsqueda
    res.redirect('/create');
});
const crud=require('./controllers/crud')
router.post('/store',crud.save)



/*router.get('/',(req,res)=>{
    conexion.query('SELECT * FROM usuario',(err,resultados)=>{
        if(err)
        throw err
    else
    res.render('index',{resultados:resultados})

    })

})

const crud=require('./controllers/crud')
router.post('/store',crud.save)

router.get('/create',(req,res)=>{
    res.render('create')

})

router.get('/edit/:id',(req,res)=>{
    const id =req.params.id
    conexion.query('SELECT * FROM usuario WHERE id=?',[id],(err,resultados)=>{
        if(err)
        throw err
    else{
    res.render('edit',{usuario:resultados[0]})
    }
    })
})
router.post('/update',crud.update)

router.get('/eliminar/:id',(req,res)=>{
    const id=req.params.id
    conexion.query('DELETE FROM usuario WHERE id=?',[id],(err,resultados)=>{
        if(err)
        throw err
    else
    res.redirect('/')
    })

})*/
module.exports=router