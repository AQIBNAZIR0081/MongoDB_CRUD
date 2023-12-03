const mongo = require("mongoose");
const productSchema = mongo.Schema({
    title:String,
    tags:[String],
    price:Number,
    slug:{
        type:String,
        lowercase:true,
    }
});
const ProductModel = mongo.model("Product",productSchema);
module.exports = ProductModel;