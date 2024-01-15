const conexion=require('../database/db')
exports.save=(req,res)=>{
    const nombre=req.body.nombre
    const fechaContratacion=req.body.fechaContratacion
    const salario=req.body.salario
    const horasTrabajadas=req.body.horasTrabajadas
    const departamento=req.body.departamento
const pagado= Math.round(Math.random())
if (!nombre || !fechaContratacion || !salario || !horasTrabajadas || !departamento) {
    return res.status(400).send('Todos los campos son obligatorios.');
}
    conexion.query('INSERT INTO empleados SET ?',{nombre:nombre,fechaContratacion:fechaContratacion,salario:salario,horasTrabajadas:horasTrabajadas,departamento:departamento},(err,results)=>{
        if(err)
        throw err
    else
    res.redirect('/create')
    })
}



/*exports.save=(req,res)=>{
    const nombre=req.body.nombre
    const ocupacion=req.body.ocupacion
    conexion.query('INSERT INTO usuario SET ?',{nombre:nombre,ocupacion:ocupacion},(err,results)=>{
        if(err)
        throw err
    else
    res.redirect('/')
    })
}
exports.update=(req,res)=>{
    const id=req.body.id
    const nombre=req.body.nombre
    const ocupacion=req.body.ocupacion
console.log(id)
    conexion.query('UPDATE usuario SET ? WHERE id=?',[{nombre:nombre,ocupacion:ocupacion},id],(err,resultados)=>{
        if(err)
        console.log(err) 
    else{
    res.redirect('/')
    }
    })
}*/