const express = require("express"); 
const { isAdmin, requireSignIn } = require('../middleware/authMiddleware'); 
const formidable = require("express-formidable"); //for image upload
const createProductController = require("../controllers/ProductController/createProduct");
const getAllProducts = require("../controllers/ProductController/getAllProduct");
const getSingleProductController = require("../controllers/ProductController/getSingleProduct");
const productPhotoController = require("../controllers/ProductController/getPhotoProduct");
const deleteProductController = require("../controllers/ProductController/deleteProduct");
const updateProductController = require("../controllers/ProductController/updateProduct");
const productFiltersController = require("../controllers/ProductController/filterProduct");

const router = express.Router();

//routes
//creating products
router.post( "/create-product",requireSignIn,formidable(),
  createProductController
);
//get products
router.get("/get-all-product", getAllProducts);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

//Update Product
router.put(
    "/update-product/:pid", requireSignIn,formidable(), updateProductController
  );

//filter product
router.get("/product-filters", productFiltersController);

module.exports = router;
/*


//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

//payments routes
//token
router.get("/braintree/token", braintreeTokenController);

//payments
router.post("/braintree/payment", requireSignIn, brainTreePaymentController);
*/

