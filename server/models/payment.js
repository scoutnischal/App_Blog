const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema(
  {
    Payment_ID: {type: Number, required: true, unique: true},
    payment_type: {type: String, required: true},
    order_Id: { type: String, required: true },
    amount: { type: Number, required: true },
    status: { type: String, default: "pending"},
  },
  { timestamps: true }
);

module.exports = mongoose.model("payment", PaymentSchema);