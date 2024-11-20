const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

const loadProducts = () => {
    const datafile = path.join(__dirname, 'JSON', 'products.json');
    const data = fs.readFileSync(datafile, 'utf-8');
    return JSON.parse(data);
};


app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    const product = loadProducts();
    res.render('index', { products:product });
});
app.get('/delete/:id',(req,res)=>{
    const id=Number(req.params.id);
    products =products.filter(product=>product.id!==id);
    fs.writeFile
})



app.listen(3000, () => {
    console.log("Server is running");
});