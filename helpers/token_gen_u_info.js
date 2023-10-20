const jwt=require('jsonwebtoken');
const {create_cookie_res_key_value}=require("../helpers/cookie_cr")

function create_token_user_info(res,user_info,secret_key){
    const token=jwt.sign(user_info,secret_key);
    console.log('Generated Token:', token);
    create_cookie_res_key_value(res,"token",token)
}

module.exports=create_token_user_info;