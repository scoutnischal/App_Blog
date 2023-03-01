const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    cat_ID: { type:Number, required:true, unique:true},
    name: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("product_category", CategorySchema);