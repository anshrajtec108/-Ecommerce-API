
function getRandomInt(max) {
    let otp=Math.floor(Math.random() * max);
    return otp
  }
  
const otp=getRandomInt(999999)
console.log(otp)
  module.exports=otp;