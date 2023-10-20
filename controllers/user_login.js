
const db=require('../config/db');
const jwt=require('../helpers/token_gen_u_info')
const {access_cookie_token}=require("../helpers/cookie_cr")
const send_email=require('../helpers/send_email')
const otp_server=require('../helpers/otp_cr_ck');
const create_token=require('../helpers/token_gen_u_info')

// Create a login route
function user_login_post(req,res,username,password){
  console.log("username",username,'passsword=',password)
  // Check user credentials in the database
  const query = 'SELECT user_name FROM user_tbl WHERE user_name = ? AND user_password = ?';
  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.log(err)
      return res.status(500).json({ error: 'Database error' });
    }
    console.log(results)
    if (results.length ===1) {
      let temp=results[0].user_name
      console.log(temp)
      const user_info_payload={
        user_id:123,
        user_name:username
      }
      const secret_key="anshraj108";
      jwt(res,user_info_payload,secret_key)
      return res.status(200).json({ message: 'Login successful' });
    } else {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
  });
};

function recoverPassword(req,res,user_otp){
  // const user_name=req.body.username
//  create_token();
//  const user_info_decode=access_cookie_token(req)
  send_email();
  // res.send(`the user info decode  ${user_info_decode.user_name}`)
  const otp_user=user_otp;
  const otp_server_2=otp_server
  console.log(`from user otp ${otp_user} and from server ${otp_server}`)
  if (otp_server_2=== parseInt(otp_user)){
    res.send("send the recover Password page with new password option ")
  }
  else{
    res.send("the otp is worng ")
  }
}

function update_password_db(res,user_name,new_password){
  const update_query='UPDATE user_tbl SET user_password = ? WHERE user_name = ?';
  db.query(update_query,[new_password,user_name],(err)=>{
    if(err){
      res.send("err in update the new passowed in update_password_db function ",err )
    }
    else{
      res.send("send the login page to login from starting  ")
    }
  })
}
module.exports={
user_login_post,
recoverPassword,
update_password_db
};