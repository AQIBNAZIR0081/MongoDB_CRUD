const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {createProduct, getAllProducts,deleteProducts,updateProduct} = require("./ProductOperation")
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/MongoDemo")
.then(async ()=>{
    console.log("Connection to MongoDB Created");
    let addproduct = await createProduct("DELL",2000,["working","gaming"]);
    console.log(addproduct);
    let allproducts = await getAllProducts()
    console.log(allproducts);
    console.log(await deleteProducts("656ca527c4d4acb6b825509a"));
    let updatedProduct = updateProduct("656ca590cf9bc1c77a7631f1","HP",4000,[]);
    console.log(updateProduct);
})
.catch((err)=>{
    console.log("Error Connecting");
    console.log(err);
})


app.listen(3000)