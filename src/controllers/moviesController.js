let db = require("../database/models")

const controlador ={
    index:(req, res)=>{
        db.Movies.findAll()
        .then(function(peliculas){
            res.render("moviesList",{peliculas:peliculas})
        })
    }
}

module.exports = controlador;