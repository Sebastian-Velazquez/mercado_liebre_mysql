const express = require("express");
const router = express.Router();

const userControllerSql = require("../controllers/userControllerSql.js");

router.get("/register/", userControllerSql.register);
router.post("/register/", userControllerSql.processRegister);
router.get("/login/", userControllerSql.login);
router.post("/login/", userControllerSql.processLogin);


module.exports = router;