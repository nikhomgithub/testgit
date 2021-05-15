const request = require('request');
const express = require('express');
const morgan = require('morgan');
const cors = require ('cors');
var responseSize = require('express-response-size');

let temp1=null
let temp2=null

require('dotenv').config();

const app = express();
app.use(cors());
//app.use(morgan("dev"));
//app.use(morgan("tiny"));
//app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(morgan(':method :remote-addr'))
console.log('app')

app.get('/yahoo', function(req,res) {
    //modify the url in any way you want
    var newurl = 'http://yahoo.com/';
    console.log('/yahoo')
    request(newurl).pipe(res);
    });

app.get("/test",(req,res)=>{
    console.log("test")
    return res.status(200).json({msg:"Pass :you access to server222"});
})
//Serve static assets if in production

app.get('/vrpusb', function(req,res) {
    //modify the url in any way you want
    console.log('/vrpusb')
    //var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    //console.log(req.get('host')) //localhost:3001
    //console.log(req.originalUrl) //  /vrpusb
    //console.log(fullUrl) 
    //console.log(req.ip)
    const tempArray=req.ip.split(":")
    temp1={
        url:(tempArray[tempArray.length-1]),
        time:new Date().toLocaleString("en-US", {timeZone: "Asia/Bangkok"})
    }

    return res.status(200).send("ok")



    /*
    var newUrl = 'http://101.108.160.6:8080';
    const options = {
        url: newUrl,
        method: 'GET',
        headers: req.headers
    };
    */

    //console.log(res)
    //request(options).pipe(res);

    //console.log('req.param')
    //console.log(req.param)

    //console.log('params')
    //console.log(req.params)
    //var newurl = 'http://101.108.160.6'    ;
    
    //console.log(res)
    //request(newUrl).pipe(res);
    //return res.status(200).json({msg:"Pass :you access to server222"});
    //return res.send('<div><h1>aaaa</h1><h2>aaa</h2></div>')
});

module.exports = app;
