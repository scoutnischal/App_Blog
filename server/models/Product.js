const mongoose = require("mongoose");
const fs = require('fs');

const ProductSchema = new mongoose.Schema({
    P_id: {type: Number , required: true, unique:true},
    Title: {type: String , required: true},
    Desc: {type: String , required: true},
    //sub_cat_id: {type: Number, required: true, unique: true},
   
    categories: {type: Array, required: true}, //putting category names into array
    Quantity: {type: Number , required: true},
    image: {type: Buffer, required: true},  // casted to MongoDB's BSON type: binData
    price: {type: Number, required:true}
  //for current date using createdAt:Date.now() and updatedAt, we can also use which is already in mongooseDB
},{timestamps: true}
);
// const ProductData = {
//     P_id: 100,
//     Title: "AMD Ryzen 9 7900X – 12-Core 4.7 GHz – Socket AM5 Desktop",
//     Desc: "AMD Ryzen 9 7900X – 12-Core 4.7 GHz – Socket AM5 – 170W Desktop Processor (100-100000589WOF)",
//     Quantity: 100,
//     image: fs.readFileSync('AMD.jpg'),
//     price: 100000
// }
// const product = new Product(ProductData);
// product.save()
//     .then(() => console.log('Product Saved Successfully!'))
//     .then(() => mongoose.connection.close(() => console.log('Connection Closed successfully!')))
//     .catch((err) => console.log(`Error in Saving product: ${err}`));

module.exports = mongoose.models("Product",ProductSchema);