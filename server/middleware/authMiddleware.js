const JWT = require("jsonwebtoken");
const adminModel = require("../models/admin")


//Protected Routes based on token
const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.admin = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};

//admin acceess
const isAdmin = async (req, res, next) => {
  try {
    const admin = await adminModel.findById(req.admin._id);
    if (admin.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "UnAuthorized Access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      error,
      message: "Error in admin middleware",
    });
  }
};
module.exports = {requireSignIn, isAdmin}