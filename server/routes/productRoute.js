const express = require("express"); 
const {requireSignIn} = require('../middleware/authMiddleware'); 
const formidable = require("express-formidable"); //for image upload
const createProductController = require("../controllers/ProductController/createProduct");
const getAllProducts = require("../controllers/ProductController/getAllProduct");
const getSingleProductController = require("../controllers/ProductController/getSingleProduct");
const productPhotoController = require("../controllers/ProductController/getPhotoProduct");
const deleteProductController = require("../controllers/ProductController/deleteProduct");
const updateProductController = require("../controllers/ProductController/updateProduct");
//const productFiltersController = require("../controllers/ProductController/filterProduct");
const productCountController = require("../controllers/ProductController/countProduct");
const relatedProductController = require('../controllers/ProductController/similarProducts');

const router = express.Router();

//routes
//creating products
router.post( "/create-product",requireSignIn,formidable(),
  createProductController
);
//get all products
router.get("/get-all-product", getAllProducts);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/delete-product/:pid", deleteProductController);

//Update Product
router.put(
    "/update-product/:pid", requireSignIn,formidable(), updateProductController
  );


//product count
router.get("/product-count", productCountController);

//similar product
router.get("/related-product/:pid/:cid", relatedProductController);

// //filter product
// router.get("/product-filters", productFiltersController);


module.exports = router;



// //search product
// router.get("/search/:keyword", searchProductController);



