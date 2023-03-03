let db = require("../database/models");

const controlador ={
    register:(req,res)=>{
        res.render('./registerSql')
    },
    processRegister:(req,res)=>{
        db.Users
        .create({
            email: req.body.email,  
            password: req.body.password,
        })
        res.send("registrado")
    },
    login:(req,res)=>{
        res.render('./loginSql')
    },
    processLogin:(req,res)=>{
        let usuario = db.Movies.findAll()
        let email = req.body.email
            if(usuario.email === email){
                res.send('Logueado')
            }
    }
}

module.exports = controlador;