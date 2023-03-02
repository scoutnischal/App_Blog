const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const authRoutes = require('./routes/authRoute');
const categoryRoute = require('./routes/categoryRoute')

dotenv.config(); // to call the .env file and access the value

//promise return garxa.. so then() use
mongoose.  
connect(process.env.MONGO_URL)
//("mongodb+srv://ankitmaharjan10:dUcxvY2XdXwZVhxZ@cluster0.g7jmgbd.mongodb.net/Computer_Shop?retryWrites=true&w=majority")
.then(()=>{
    console.log("DB connection Succesfull")})
    .catch((error)=>{
    console.log(error);
});
app.use(cors());
app.use(express.json());

app.use("/api/admin", authRoutes);
app.use("/api/category", categoryRoute);

app.listen(process.env.PORT || 5000, ()=>{
    console.log("Hello");
    console.log("Server is running")
});