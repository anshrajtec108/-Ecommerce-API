const db=require('../config/db')


function product_tbl_create(){
    const product_tbl_create_query=`CREATE TABLE IF NOT EXISTS product_tbl(
    product_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255),
    product_description VARCHAR(255),
    product_price int,
    category_id int,
    stock_present int,
    img_url  VARCHAR(255)
    );`
    db.query(product_tbl_create_query,(err)=>{
        if (err){
            console.log('error from product_tbl_model.js',err);
        }
        else{
            console.log("the product table is created ✅product_tbl_model.js ")
        }
    })

}

module.exports=product_tbl_create;