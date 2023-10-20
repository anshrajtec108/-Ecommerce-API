const nodemailer = require('nodemailer');
const otp_import=require('./otp_cr_ck');

const otp=otp_import;
function send_email(){
// Create a transporter with your email configuration
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'albert.pouros28@ethereal.email',
        pass: 'YpqXgQABG7nGvh1Uax'
    }
});

// Compose the email
const mailOptions = {
    from: 'anshraj108.er@gmail.com',
    to: 'anshrajdio108@gmail.com',
    subject: 'Your OTP for Checkout',
    text: `Your OTP is: ${otp}`,
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
        
    }
});
}
module.exports=send_email;