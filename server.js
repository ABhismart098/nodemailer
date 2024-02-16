const express = require('express');
const app = express();
const port = 5000;
const Sendmail = require('./controler/sendMAil')

app.get('/', async(req, res) =>{
    res.status(200);
    res.send({message: "HEllo welcome to your website"})
})

app.get('/sendMail',Sendmail)

app.listen(port,() =>{
    console.log(`welcome to==> http://localhost:${port}`);
})
