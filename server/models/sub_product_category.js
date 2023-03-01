const mongoose = require("mongoose");

const SubCategorySchema = new mongoose.Schema(
  {
    sub_cat_ID: { type:Number, required:true, unique:true},
    cat_ID: { type: Number, required: true},
    name: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("sub_product_category", SubCategorySchema);