const express=require("express");
const cors=require('cors');
const app=express();
app.use(cors());
require("dotenv").config();
const port=process.env.PORT||8080;
app.get('/',(req,res)=>{
    return res.send("Welcome to Serverless Unleashed Workshop");
})
app.get('/greet',(req,res)=>{
    const name=req.query.name||"mate";
    return res.send(`Hello ${name}, nice to meet you.`);
})
app.get('/greet/:name',(req,res)=>{
    const name=req.params.name||"mate";
    return res.send(`Hello ${name}, nice to meet you.`);
})
app.listen(port,()=>{
console.log(`Server running at port ${port}`);
})