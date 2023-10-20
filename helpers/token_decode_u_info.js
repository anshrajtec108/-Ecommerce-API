const jwt=require('jsonwebtoken')
const cookies=require('cookie')

function authenticateToken(req, res, next) {
    const cookie_paser=cookies.parse(req.headers.cookie || '');
    let token=cookie_paser.token;

    console.log(token)
    if (!token) {
      return res.sendStatus(401); // Unauthorized
    }
  
    jwt.verify(token, 'anshraj108', (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden (invalid token)
      }
      console.log(user);

      // Token is valid, and user data is available in the 'user' object.
      req.user = user;
      next();
    });
  }
  
module.exports=authenticateToken;