//va siempre
//llama expres y guarda la ejecucion de router
const express = require("express");
const router = express.Router();

//Controllers
const moviesController = require("../controllers/moviesController.js");

router.get("/list", moviesController.index);

module.exports = router;
