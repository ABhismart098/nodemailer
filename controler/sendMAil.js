const nodemailer = require('nodemailer');

const sendMail = async (req, res) => {
    const transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        
        auth: {
            user: 'olen68@ethereal.email',
            pass: 'RV7ABrzNtRZbZdQW6n'
        },
    });
    let info = await transporter.sendMail({
        from: '"Akyadav" <olen68@ethereal.email>', // Corrected sender address format
        to: "abhisheky220920@gmail.com",
        subject: "Hello ✔",
        text: "Hello world?",
        html: "<b>Hello world?</b>",
    });

    res.json(info);
    console.log("Message sent: %s", info.messageId);
};

module.exports = sendMail;
