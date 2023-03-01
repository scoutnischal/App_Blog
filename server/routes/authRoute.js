const express = require("express");
const router = express.Router();
//const admin = require('../models/admin')
const registerController = require("../controllers/adminRegister");
const loginController = require("../controllers/loginAdmin");

//REGISTER ADMIN
router.post("/register", registerController);





// ADMIN LOGIN || POST
router.post("/login", loginController);

module.exports = router;
