const express = require('express');
const app = express();
const path = require('path');

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"fetch.html"));
})
app.get("/data",(req,res)=>{
    res.sendFile(path.join(__dirname,"JSON","fetch.json"));
})

app.listen(3002,()=>{
    console.log("server is running");
})