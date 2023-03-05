//const userModel = require('../../models/userModel');
const paymentModel = require('../../models/paymentModel');
//const order = require('../../models/orderModel');
// const product = require('../../models/productModel');

const payment = async(req,res,next)=>{
    try {
        const {payment_type,order_Id,amount} = req.body;
        const userPayment =await new paymentModel({
            payment_type : payment_type, 
            order_Id : order_Id,
            amount :  amount,
        }).save()
        if(userPayment){
            console.log("Successfully User Payment!")
            return res.status(201).send({
                success:true,
                msg:"User hasbeen Successfully Payment, Thankyou for Shopping!"
            });
        }else{
            return res.status(500).send({
                success:false,
                msg:"User Payment hasbeen Fail!!"
            });
        }
    } catch (error) {
        res.status(500).send({
            success:false,
            msg:'Error While user Payment'
        });
        console.log('Error While user Payment',error);
    }
}

module.exports = payment;

/*
{
  "payment_type":"Check Payment",
  "order_Id":"64037ad7aa712188a540a509",
  "amount":"250000"
}
*/