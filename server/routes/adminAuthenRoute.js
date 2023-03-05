const express = require("express");
const router = express.Router();
//const admin = require('../models/admin')
const registerController = require("../controllers/AdminAuthenticationController/adminRegister");
const loginController = require("../controllers/AdminAuthenticationController/loginAdmin");
const testController = require("../controllers/AdminAuthenticationController/testController");
const { isAdmin, requireSignIn } = require("../middleware/authMiddleware");
const forgotPasswordController = require('../controllers/AdminAuthenticationController/forgotpasswordController')
const updateProfileController = require('../controllers/AdminAuthenticationController/updateProfile');


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
