//va siempre
//llama expres y guarda la ejecucion de router
const express = require("express");
const router = express.Router();

//Controllers
const moviesController = require("../controllers/moviesController.js");

//lista completa de peliculas
router.get("/list", moviesController.index);
//detalle de pelicula
router.get("/list/:id/", moviesController.detail);


module.exports = router;
