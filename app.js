const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());

app.get('/',(req,res)=>{
  res.send("Hello");
})

app.get('/set-cookie',(req,res)=>{
  //res.setHeader("set-cookie","foo=bar");
   res.cookie("OTP","7237336",{
    // maxAge:5000,
    //expires:new Date("9 Jan 2023"),
    //httpOnly:true,
    //secure:true,
    domain:"example.com"
  });
 //);
  res.send("cookies are set");
})

app.get('/get-cookie',(req,res)=>{
console.log((req.cookies));
 res.json(req.cookies);
})

app.get('/delete-cookie',(req,res)=>{
 res.clearCookie("OTP");
 res.send("Cookie has been deleted");
})



app.listen(3000,()=>{
  console.log('server is running on port 3000');
})