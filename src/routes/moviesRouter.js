//va siempre
//llama expres y guarda la ejecucion de router
const express = require("express");
const router = express.Router();

// llamamos a la ruta de controlador
const moviesController = require("../controllers/moviesController.js");

router.get("/list", moviesController.list);
router.get("/list", moviesController.detail);

module.exports = router;