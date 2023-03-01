const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    cart_Id: { type:Number, required:true, unique:true},
    user_Id: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    //order_Id: { type: Number, required: true}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);