const db=require('../config/db')


function cart_tbl_create(){
    const cart_tbl_create_query=`CREATE TABLE IF NOT EXISTS cart_tbl(
    cart_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id int,  
    user_id int
    );`
    db.query(cart_tbl_create_query,(err)=>{
        if (err){
            console.log('error from cart_tbl_model.js',err);
        }
        else{
            console.log("the cart table is created ✅cart_tbl_model.js ")
        }
    })

}

module.exports=cart_tbl_create;