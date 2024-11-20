const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    //res.write("this is my first server");
    if(req.url=="/"|| req.url=="/home"){
        const data =  fs.readFileSync("index.html","UTF-8");
   res.write(data);
    }
   else if(req.url=="/style.css"){
    const data = fs.readFileSync("style.css","utf-8")
    res.write(data);
   }
   else if(req.url=="/GOT.jpeg"){
    const data = fs.readFileSync("GOT.jpeg");
    res.write(data);
   }
   else if(req.url=="/GOW.jpeg"){
    const data = fs.readFileSync("GOW.jpeg");
    res.write(data);
   }

    res.end();
})

server.listen(3001,()=>{
    console.log("server is running");
})