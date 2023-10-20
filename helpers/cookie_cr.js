const cookies=require('cookie')
const jwt=require('jsonwebtoken')


function create_cookie_res_key_value(res,key,value){
    res.setHeader('Set-Cookie', cookies.serialize(key, value));
}

function access_cookie_token(req){
    const cookie_paser=cookies.parse(req.headers.cookie || '');
    let token=cookie_paser.token;
    if (token){
            const decode=jwt.verify(token,'anshraj108')       
            return decode
    }

}
module.exports={create_cookie_res_key_value,
    access_cookie_token};