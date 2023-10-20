const db = require('../config/db');

function orderItemTableCreate() {
    const orderItemTableCreateQuery = `
    CREATE TABLE IF NOT EXISTS order_item (
        order_item_id INT AUTO_INCREMENT PRIMARY KEY,
        order_id INT,
        product_id INT,
        price_at_purchase DECIMAL(10, 2)
        );`

    db.query(orderItemTableCreateQuery, (err) => {
        if (err) {
            console.log('Error from orderItemTableCreate:', err);
        } else {
            console.log('The order item table is created ✅');
        }
    });
}

module.exports = orderItemTableCreate;
