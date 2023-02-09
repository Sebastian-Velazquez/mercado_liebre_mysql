let db = require("../database/models")
//const { Sequelize } = require('sequelize')
const controlador ={
    index:(req, res)=>{
        db.Movies.findAll()
        .then(function(peliculas){
            res.render("moviesList",{peliculas:peliculas})
        })
    },
    detail:(req,res)=>{
        db.Movies.findByPk(req.params.id)//paramrtro del body. id porque pusimos asi en el router
        .then(pelicula=>{
            res.render("movieDetail",{pelicula:pelicula})
        })
    },
    drama:(req, res)=>{
        db.Movies.findAll({
                where:{
                    genre_id: 3
                }
            })
            .then(function(peliculas){
                res.render("moviesDrama",{peliculas:peliculas})
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
    },
    create:(req,res)=>{
        res.render("movieCreate")
    },
    processCreate:(req, res)=>{
        db.Movies.create({
            title: req.body.titulo,  //del lado izquierdo es el nombrede la columnas en la base de datos
            rating:  req.body.rating  //del lado derecho son los nombres de los formularios
        })
        res.redirect("/movies/list")
    }
}

module.exports = controlador;