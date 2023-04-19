"use strict";
const nodemailer = require("nodemailer");

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
    host: "smtp.zoho.in",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    },
});


const sendWelcomeEmail = (email, name) => {
    // send mail with defined transport object
    let info = transporter.sendMail({
        from: '"CEO" <shreyaspoojary240@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Welcome to the app ", // Subject line
        text: `Welcome to the app, ${name}.Let me know how you like the app`, // plain text body
    });

}

const sendCancellationEmail = (email, name) => {
    let info = transporter.sendMail({
        from: '"CEO" <shreyaspoojary240@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Sorry to see you go! ", // Subject line
        text: `Thank You for trying the app, ${name}.How do you think we can improve?`, // plain text body
    });

}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
};
