const express = require('express')
const app = express()
const path = require('path')
const QRCode = require('qrcode')
const prompt = require('prompt-async');

//"https://www.npmjs.com/package/qrcode"

//settings
app.set('port', 3060)

//middlewares
app.use(express.static(path.join(__dirname, 'public')))

//routes
app.use(express.json())
app.use(express.urlencoded({extended:true}))

function url(){
    prompt.start();
    prompt.get(["url"], (error, result) => {
        if(error)
        {
            throw Error(error);
        }
            QRCode.toString(result.url,{type:'url'},
                        function (err, QRcode) {
            if(err) return console.log("error occurred")
            console.log(QRcode)})
        });
    };

url()

