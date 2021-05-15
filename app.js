const request = require('request');
const express = require('express');
const morgan = require('morgan');


let tempInside=null
let tempOutside=null

require('dotenv').config();

const app = express();
app.use(morgan("dev"));

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

app.get('/vrpoutsiderec', function(req,res) {
    const tempArray=req.ip.split(":")
    tempOutside={
        myip:(tempArray[tempArray.length-1]),
        timestamp:new Date().toLocaleString("en-US", {timeZone: "Asia/Bangkok"})
    }
    return res.status(200).send("record from outside")
});

app.get('/vrpinsiderec', function(req,res) {
    const tempArray=req.ip.split(":")
    tempInside={
        myip:(tempArray[tempArray.length-1]),
        timestamp:new Date().toLocaleString("en-US", {timeZone: "Asia/Bangkok"})
    }
    return res.status(200).send("record from inside")
});

app.get('/vrpoutside', function(req,res) {
    return res.status(200).send(tempOutside)
});

app.get('/vrpinside', function(req,res) {
    return res.status(200).send(tempOutside)
});


module.exports = app;
