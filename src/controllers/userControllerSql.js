let db = require("../database/models");
const bcryptjs = require('bcryptjs');

const controlador ={
    register:(req,res)=>{
        res.render('./registerSql')
    },
    processRegister:(req,res)=>{
        db.Users
        .create({
            email: req.body.email,  
            password: bcryptjs.hashSync(req.body.password, 10),
        })
        res.send("registrado")
    },
    login:(req,res)=>{
        res.render('./loginSql')
    },
    processLogin:(req,res)=>{
        let findByField =  (field, text)=>{
            let allUser = db.Usres.findAll()
            res.send( "actores son: " + allUser)
        }
        let userToLogin = findByField('email', req.body.email)
        
        if (userToLogin){
            let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if(isOkThePassword){
                delete userToLogin.password; //por seguridad
                req.session.userLogged =  userToLogin
                return res.redirect('/user/userProfile')
            }
            //return res.redirect('/user/login')
            return res.render('./users/login' , {
            errors: {
                email: {msg:'Las credenciales no son validas'}
            }
            } )

        }
        return res.render('./users/login', {
            errors: {
                email: {msg:'No se encontro el email en DB'}
            }
        })
    }        
}

module.exports = controlador;