const express=require("express");
const cors=require('cors');
const app=express();
app.use(cors({
    origin:"*"
}));
require("dotenv").config();
const port=process.env.PORT||8080;
cmap={}
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
app.get('/record',(req,res)=>{
    const name=req.query.name;
    if(!name) return res.json({msg:"Hello Mate, how are you?.Please provide me your name."})
    if(cmap[name]){
        return res.json({msg:cmap[name]});
    }
    else{
        cmap[name]=`${name} called the api for the first time at ${new Date().toLocaleString()}`;
        return res.json({msg:`${name} called the api for the first time.`})
    }
});
app.get('/viewcallers',(req,res)=>{
    return res.json({callers: cmap})
  })
app.listen(port,()=>{
console.log(`Server running at port ${port}`);
})