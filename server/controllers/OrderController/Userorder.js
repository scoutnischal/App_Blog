//const userModel = require('../../models/userModel');
// const productModel = require('../../models/productModel');
//const paymentModel = require('../../models/paymentModel');
const orderModel = require('../../models/orderModel');

const order = async(req,res,next)=>{
    try {
        const data = req.body;
        const objData = JSON.parse(JSON.stringify(data));
        const user_Id = req.params.user_id;
        console.log("UserID :",user_Id)
        const product_Id = objData.products.product_Id;
        const product_Name = objData.products.product_Name;
        const qnty = objData.products.qantity;
        const {amount,phone,address} = req.body;
        const orderSuccess =await new orderModel({
            user_Id : user_Id,
            products :{
                product_Id : product_Id,
                product_Name : product_Name,
                quantity : qnty,
            },
            address : address,
            phone : phone,
            amount : amount,
        }).save();  
       if(orderSuccess){
        return res.status(201).send({
            success:true,
            msg:"Your Order has been success!!, Thankyou for Shopping"
        });
    }else{
        return res.status(500).send({
            success:false,
            msg:"Somthing is issue in UserOrder!!"
        });
    }
    } catch (error) {
        res.status(500).send({
            success : false,
            msg:"Error While User OrderProduct"
        });
        console.log("Error in UserOrder",error);
    }
}

module.exports = order;

/*
{
  "products":{
        "product_Id":"25",
        "product_Name":"Gaming Keyboard",
        "quantity":1
    },
    "amount":"2000",
    "phone":"9874087563",
    "address":"Balaju,KTM Area,Bagamti Province"
}
*/ 