const db=require('../config/db')


function category_tbl_create(){
    const category_tbl_create_query=`CREATE TABLE IF NOT EXISTS category_tbl(
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    category_name VARCHAR(255)
     );`
    db.query(category_tbl_create_query,(err)=>{
        if (err){
            console.log('error from category_tbl_model.js',err);
        }
        else{
            console.log("the product table is created ✅category_tbl_model.js ")
        }
    })

}

module.exports=category_tbl_create;