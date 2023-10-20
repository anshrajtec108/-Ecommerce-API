const express = require('express');
const path = require('path');
const {user_login_post}=require('../controllers/user_login')
const {recoverPassword}=require('../controllers/user_login')
const {update_password_db}=require('../controllers/user_login')
const authenticateToken=require('../helpers/token_decode_u_info')

const router = express.Router();



router.get('/logPage', (req, res) => {
  // Use path.join to create an absolute path to your HTML file
  const filePath = path.join(__dirname, '../views/login.html');
  res.sendFile(filePath);
})

router.post('/login',(req, res) => {
 
    const username = req.body.username;
    const password =req.body.password;
    user_login_post(req,res,username,password)
});

router.post('/login/recoverPassword/p1',(req,res)=>{
    const user_otp=req.body.otp;
    console.log(`from router ${user_otp}`)
    recoverPassword(req,res,user_otp);
})

router.post('/login/recoverPassword/p2',(req,res)=>{
  const user_name=req.body.UserName
  const new_password=req.body.NewPassword;
  console.log(user_name,new_password);
  update_password_db(res,user_name,new_password)
  
})

// Create a route to check if the user is logged in



router.get('/protectedRoute', authenticateToken, (req, res) => {
    // You can access req.user here
    const user = req.user;
    res.json({ message: 'Access granted for user: ' + user.user_name });
});
  
  
  
  
  // Create a logout route
  router.get('/logout', (req, res) => {
  
  });
  
  
  module.exports=router;

