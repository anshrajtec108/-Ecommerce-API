const table=require('./controllers/create_tbl_controllers')
const user_router=require('./router/user_login_router')
const product_router=require('./router/product_router')
const express=require('express');
const app=express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

table()

app.use(user_router)
app.use(product_router)

app.listen(600, () => {
    console.log(`the server is started at 600`);
});

