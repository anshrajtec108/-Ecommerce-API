const user_tbl_create=require('../model/user_tbl_model');
const product_tbl=require('../model/product_tbl_model');
const category=require('../model/category_tbl_model')
const cart_tbl=require('../model/cart_tbl_model');
const order_tbl=require('../model/order_tbl_model');
const order_hty_tbl=require('../model/order_hty_tbl_model');
const review_tbl=require('../model/review_tbl_model');


function createTableToProject(){
    user_tbl_create();
    product_tbl();
    category();
    cart_tbl();
    order_tbl();
    order_hty_tbl();
    review_tbl();

}
module.exports=createTableToProject;