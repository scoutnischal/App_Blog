const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: {type: String , required: true, unique:true},
    password: {type: String , required: true},
    email: {type: String , required: true, unique:true},
    address: {type: String, required: true},
    phone: {type: String , required: true, unique:true},
    isAdmin: {
        type: Boolean,
        default: false
    },

    //for current date using createdAt:Date.now() and updatedAt, we can also use which is already in mongooseDB
},{timestamps: true}
);
module.exports = mongoose.model("user",UserSchema);