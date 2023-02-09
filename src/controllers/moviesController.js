let db = require("../database/models")

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
    }
}

module.exports = controlador;