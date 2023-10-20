const express=require('express')
const {select_product}=require('../controllers/product')
const {select_the_product_on_category_tbl}=require('../controllers/product')
const router=express.Router();
router.get('/home',(req,res)=>{
    res.send("send the home page with product list ")
})
router.post('/product',(req,res)=>{
    const sort=req.body.sort
    select_product(res,sort)
})

router.post('/product/category',(req,res)=>{
    const sort=req.body.sort
    const name_category=req.body.CategoryName
    select_the_product_on_category_tbl(res,name_category,sort)
})
module.exports=router;