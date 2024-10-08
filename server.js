const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded())
app.post("/submit",(req,res)=>{
   // console.log(req.body);
    fs.readFile("user.json","utf-8",(err,data)=>{
        let file = JSON.parse(data);
        if(err)
            console.log(err);
        
        let result = file.filter((item)=>{
            if(item.username==req.body.username && item.password==req.body.password)
                return true;
        })

        if(result.length==0)
            res.send("Invalid passowrd");
        else
            res.send("welcome");

    })
})

app.listen(3000,()=>{
    console.log("server is running");
})