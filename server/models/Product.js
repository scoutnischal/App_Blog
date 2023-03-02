const mongoose = require("mongoose");
const fs = require('fs');

const ProductSchema = new mongoose.Schema({
    Title: {type: String , required: true},
    Description: {type: String , required: true},
    //sub_cat_id: {type: Number, required: true, unique: true},
   
    Category: {type: mongoose.ObjectId, required: true}, //putting category names into array
    Quantity: {type: Number , required: true},
    Image: {
      data: Buffer, required: true, contentType: String
    },  // casted to MongoDB's BSON type: binData
    Price: {type: String, required:true}
  //for current date using createdAt:Date.now() and updatedAt, we can also use which is already in mongooseDB
},{timestamps: true}
);


module.exports = mongoose.models("Product",ProductSchema);