const ProductModel = require("./Models/ProductModel");
const createProduct = async (title, price, tags)=>{
console.log("create Product");
let product = new ProductModel();
product.title = title;
product.price = price;
product.tags = tags;
await product.save();
return product;
}
const updateProduct = async (_id,title, price, tags)=>{
let product = await ProductModel.findById(_id);
product.title = title;
product.price = price;
product.tags = tags;
await product.save();
return product;
}
const getAllProducts = async()=>{
    let products = await ProductModel.find();
    return products;
}
const deleteProducts = async(_id)=>{
    let products = await ProductModel.findByIdAndDelete(_id);
    return products;
}
module.exports.createProduct = createProduct;
module.exports.getAllProducts = getAllProducts;
module.exports.deleteProducts = deleteProducts;
module.exports.updateProduct = updateProduct;
