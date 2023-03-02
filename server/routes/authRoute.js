const express = require("express");
const router = express.Router();
//const admin = require('../models/admin')
const registerController = require("../controllers/AuthenticationController/adminRegister");
const loginController = require("../controllers/AuthenticationController/loginAdmin");
const testController = require("../controllers/AuthenticationController/testController");
const { isAdmin, requireSignIn } = require("../middleware/authMiddleware");
const forgotPasswordController = require('../controllers/AuthenticationController/forgotpasswordController')
const updateProfileController = require('../controllers/AuthenticationController/updateProfile');


//REGISTER ADMIN
router.post("/register", registerController);

// ADMIN LOGIN || POST
router.post("/login", loginController);

//protected Admin route auth
 router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
     res.status(200).send({ ok: true });
   });

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);


//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//update profile
router.put("/profile", requireSignIn, updateProfileController);

module.exports = router;
