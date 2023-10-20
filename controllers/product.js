const db=require('../config/db')

function sort_product_all_asc(res){
    const query_sort_ases='select * from product_tbl   ORDER BY Product_price'
    db.query(query_sort_ases,(err,result5)=>{
        if (err){
            res.send("the error from sort_product_all_asc fuction")
        }
        else{
            res.send(result5)
        }
    })

}

function sort_product_all_desc(res){
    const query_sort_desc='select * from product_tbl ORDER BY Product_price DESC'
    db.query(query_sort_desc,(err,result4)=>{
        if (err){
            res.send("the error from sort_product_all_desc fuction")
        }
        else{
            res.send(result4)
        }
    })

}


function select_product(res,sort){
    const select_query='select * from product_tbl'
    db.query(select_query,(err,result)=>{
        if (err){
            res.send("the error to select the produt in select_product fuction",err)
        }
        else{
            if(sort=="acs"){
            sort_product_all_asc(res)
        }
        if (sort=="desc") {
            sort_product_all_desc(res)
            
        } else {
            res.send(result)
        }
        }
    })
}


function sort_product_category_acs(res,category_id){
    const query_sort_ases='select * from product_tbl where category_id=?  ORDER BY Product_price'
    db.query(query_sort_ases,[category_id],(err,result3)=>{
        if (err){
            res.send("the error from sort_product_category_acs fuction")
        }
        else{
            res.send(result3)
        }
    })

}

function sort_product_category_desc(res,category_id){
    const query_sort_desc='select * from product_tbl where category_id=?  ORDER BY Product_price DESC'
    db.query(query_sort_desc,[category_id],(err,result4)=>{
        if (err){
            res.send("the error from sort_product_category_desc fuction")
        }
        else{
            res.send(result4)
        }
    })

}


function select_the_product_on_category_tbl(res,name_category,sort){
 const query_select_the_category_id='select category_id from category_tbl where category_name=?'
 db.query(query_select_the_category_id,[name_category],(err,result)=>{
 if(err){
    res.send("the error from selecting the category_id in select_the_product_on_category_tbl fuction",err);
 }
 else {
    if (result.length > 0) {
        const category_id=result[0].category_id
        const select_query_product_category_id='select * from product_tbl where category_id=?'
         db.query(select_query_product_category_id,[category_id],(err,result2)=>{
            if(err){
                res.send("the error for selecting product based on category_id")
            }
            else{
                if(sort=="acs"){
                    sort_product_category_acs(res,category_id)
                }
                if (sort=="desc") {
                    sort_product_category_desc(res,category_id)
                    
                } else {
                    res.send(result2)
                }
            
            }
         })
    }}
})
}





module.exports={
    select_product,
    select_the_product_on_category_tbl
}