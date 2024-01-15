const express=require('express')
const app=express()
const flash = require('express-flash');
const path=require('path')
const expressLayouts=require('express-ejs-layouts')
const bodyParser = require('body-parser');
const session = require('express-session');

//settings
app.set('view engine','ejs')
app.set('port',process.env.PORT||3000)
//agregar flash msg
app.use(flash());

//middlewares

app.use(expressLayouts)
app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(session({
    secret:'misecreto',
    resave:false,
    saveUninitialized:true
}))


app.use('/',require('./router'))

app.listen(app.get('port'),()=>{
    console.log(`conexion exitosa con http://localhost:${app.get('port')}`)
})