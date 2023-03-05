const cartModel = require('../../models/cartModel');

//user add product into card
const product_insert = async(req,res,next)=>{
    try {
        // const data1 =({})
        const data = req.body;
        const  cart_Id = req.body.cart_Id;
        const   user_Id = req.params.id;
        const  objData = JSON.parse(JSON.stringify(data));
        const product_Id = objData.products.product_Id;
        const qty = objData.products.qantity;
        const addToCart =await new cartModel({
             cart_Id :cart_Id,
             user_Id : user_Id,
             products : {
                product_Id : product_Id,
                qantity :qty,
             }
        }).save();
        if(addToCart){
            return res.status(201).send({
                success:true,
                msg:"Successfully Product Add to cart"
            });
        }else{
            return res.status(500).send({
                success:false,
                msg:"Can't Prodcut Add to cart"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            msg:'something is error in product insert into cart',
            success:false
        })
    }
}  
module.exports = product_insert;


// 63ff0ec3fd3b2ad077537b8c
/*
{
  "cart_Id":"12",
  "products":{
    "product_Id":"01",
    "qantity":3
  }
}
*/


/*
if(data){
            // console.log("Cart Details::",JSON.stringify(data));
            console.log("Cart_ID:",cart_Id,",User_ID:",user_Id);
            // console.log("products:",products);
            console.log(JSON.stringify(data));
            // console.log(products);
            return res.send({
                msg: data
            })
        } 
*/ 