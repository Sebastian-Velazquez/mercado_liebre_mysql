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
//Lista de peliculas de drama
router.get("/drama/", moviesController.drama);
//Muestr peliculas con rating mayo a 8
router.get("/top/", moviesController.top);
//Formulario crear prductos
router.get("/create/", moviesController.create);
//Formulario crear prductos
router.post("/create/", moviesController.processCreate);
//Formulario editat pelicula
router.get("/edit/:id", moviesController.edit);
router.post("/edit/:id", moviesController.proccesEdit);//para que quede mas prolijo cambiar post por el que corresponde
//Formulario para eliminar pelicula
router.post("/delete/:id", moviesController.delete);//instalar overr-rray para que funcione post, delete, put

module.exports = router;
