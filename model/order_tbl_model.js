const db = require('../config/db');

function orderTableCreate() {
    const orderTableCreateQuery = `
    CREATE TABLE IF NOT EXISTS order_table (
        order_id INT AUTO_INCREMENT PRIMARY KEY,
        user_id INT, -- Foreign Key to the User Table
        order_date DATE,
        total_price DECIMAL(10, 2),
        status VARCHAR(255)
    );
    `;

    db.query(orderTableCreateQuery, (err) => {
        if (err) {
            console.log('Error from orderTableCreate:', err);
        } else {
            console.log('The order table is created ✅');
        }
    });
}
module.exports=orderTableCreate;