const {validationResult} = require('express-validator');
let db = require("../database/models")
//const { Sequelize } = require('sequelize')
const controlador ={
    index:(req, res)=>{
        db.Movies.findAll()
        .then(function(peliculas){
            res.render("moviesList",{peliculas:peliculas})
        })
        .catch(function(error){
            res.send(error);
        })
    },
    detail:(req,res)=>{
        db.Movies.findByPk(req.params.id,{//paramrtro del body. id porque pusimos asi en el router
            include:[{association: "genero"},{association: "actores"}]
        })
        .then(pelicula=>{
            res.render("movieDetail",{pelicula:pelicula})
        })
        .catch(function(error){
            res.send(error);
        })
    },
    drama:(req, res)=>{
        db.Movies.findAll({
                where:{
                    genre_id: 3//busca el genero con id 3
                }
            })
            .then(function(peliculas){
                res.render("moviesDrama",{peliculas:peliculas})
            })
            .catch(function(error){
                res.send(error);
            })
    },
    top:(req, res)=>{
        db.Movies.findAll({
                where:{
                    rating: {[db.Sequelize.Op.gt] : 8}//gt es mayor que 8
                },
                order:[
                    ["title", "ASC"]
                ],
                limit: 5 // limit o Offset - solo funciona con limit con findAll()//limita a cinco resultados
            })
            .then(function(peliculas){
                res.render("moviesTop",{peliculas:peliculas})
            })
            .catch(function(error){
                res.send(error);
            })
    },
    create:(req,res)=>{
        db.Genres.findAll()
        .then(function(generos){
            res.render("movieCreate",{generos:generos})
        })
        .catch(function(error){
            res.send(error);
        })
        //res.render("movieCreate")
    },
    processCreate:(req, res)=>{
        //validacion
        const resultValidation = validationResult(req);//validacion
        if (resultValidation.errors.length > 0){//resultValidation.errors es un objeto literal//mapped: pasa la variable resultValidation a literiario
            db.Genres.findAll()
        .then(function(generos){
            return res.render("movieCreate",{generos:generos, errors: resultValidation.mapped(), oldData: req.body})
        })
        .catch(function(error){
            res.send(error);
        })
            //return res.render('movieCreate', {errors: resultValidation.mapped(), oldData: req.body }) //Para mostrar los datos bien ingresados
            }else{//si todo esta bien se guarda
            
        db.Movies.create({
            title: req.body.titulo,  //del lado izquierdo es el nombrede la columnas en la base de datos
            awards: req.body.premio,
            release_date: req.body.fechaEstreno,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating:  req.body.rating  //del lado derecho son los nombres de los formularios
        })
        return res.redirect("/movies/list")
        }
    },
    edit:(req,res)=>{
        /*db.Movies.findByPk(req.params.id),
        .then(pelicula=>{
            res.render("movieEdit",{pelicula:pelicula})
        })
        .catch(function(error){
            res.send(error);
        })*/

        let pedidoPeliculas = db.Movies.findByPk(req.params.id);
        let pedidosGeneros = db.Genres.findAll();

        Promise.all([pedidoPeliculas, pedidosGeneros])//para poder llamar dos tablas
        .then(function([pelicula, generos]){
            res.render("movieEdit", {pelicula:pelicula, generos:generos})
        })
    },
    proccesEdit:(req,res)=>{
                db.Movies.update({
            title: req.body.titulo,  //del lado izquierdo es el nombrede la columnas en la base de datos
            awards: req.body.premio,
            release_date: req.body.fechaEstreno,
            genre_id: req.body.genero,
            length: req.body.duracion,
            rating:  req.body.rating  //del lado derecho son los nombres de los formularios
            },{
                where:{
                    id: req.params.id
                }
            });
        res.redirect("/movies/list/" + req.params.id)
    },
    delete:(req,res)=>{
        //res.send("HOLA")
        db.Movies.destroy({
            where:{
                id: req.params.id
            }
        })
        res.redirect("/movies/list")
    }
}

module.exports = controlador;