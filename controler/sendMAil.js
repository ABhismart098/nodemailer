// const nodemailer = require('nodemailer');
// const sendMail = async (req, res)=>{
//     const transporter = await nodemailer.createTransport({
//         host: "smtp.ethereal.email",
//         port: 587,
        
//         auth: {
//           // TODO: replace `user` and `pass` values from <https://forwardemail.net>
//           user: 'olen68@ethereal.email',
//           pass: 'RV7ABrzNtRZbZdQW6n'
//         },
//       });

//       let info = await transporter.sendMail({
//         from: '"Akyadav" <RV7ABrzNtRZbZdQW6n>', // sender address
//     to: "abhisheky220920@gmail.com", // list of receivers
//     subject: "Hello ✔", // Subject line
//     text: "Hello world?", // plain text body
//     html: "<b>Hello world?</b>", // html body
//       })

//     res.json(info);
//     console.log("Message sent: %s", info.messageId);
// }
// module.exports = sendMail;
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
