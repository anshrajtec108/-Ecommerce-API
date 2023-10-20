const db = require("../config/db");

function user_tbl_create() {
  const user_tbl_create_query = `CREATE TABLE IF NOT EXISTS user_tbl(
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    user_name VARCHAR(255),
    user_email VARCHAR(255),
    user_ph_no int,
    user_password VARCHAR(255),
    name VARCHAR(255),
    address VARCHAR(255)
     );`;
  db.query(user_tbl_create_query, (err) => {
    if (err) {
      console.log("error from user_tbl_model.js", err);
    } else {
      console.log("the user table is created ✅ user_tbl_model.js ");
    }
  });
}

module.exports = user_tbl_create;
