const db=require('../config/db');

function reviewTableCreate() {
    const reviewTableCreateQuery = `
    CREATE TABLE IF NOT EXISTS review (
        review_id INT AUTO_INCREMENT PRIMARY KEY,
        product_id INT, -- Foreign Key to the Product Table
        user_id INT, -- Foreign Key to the User Table
        rating INT,
        comment TEXT,
        review_date DATE
    );
    `;

    db.query(reviewTableCreateQuery, (err) => {
        if (err) {
            console.log('Error from reviewTableCreate:', err);
        } else {
            console.log('The review table is created ✅');
        }
    });
}

module.exports=reviewTableCreate