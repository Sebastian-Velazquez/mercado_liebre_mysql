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
            //let emailBody = req.body.email
            db.Users.findOne({
                where:{
                    email: req.body.email
                }
            }).then(userToLogin =>{
                console.log(userToLogin)
                if(userToLogin){
                    let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
                    if(isOkThePassword){
                        delete userToLogin.password; // Borrra el password para que no quede guardado.
                        //Guardar el user logeado
                        req.session.userLogged =  userToLogin
                        return res.redirect('/user/profile')
                    }else{
                    //si el password no es valido
                    return res.send("contraseña no valida"/* './users/login', {
                        errors: {
                            email: {msg:'Las credenciales no son validas'}
                        }
                        } */)
                    }
                }else{
                    return res.send("mail no encontrado"/* './users/login', {
                        errors: {
                            email: {msg:'No se encontro el email en DB'}
                        }
                    } */)
                }
            }).catch(function(error){
                res.send(error);
            })


    }        
}

module.exports = controlador;