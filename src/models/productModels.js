import { Schema, model } from "mongoose";

const productSchema = new Schema({
    name: { type: String },
    brand: { type: String },
    harvest: { type: Number },
    variety: { type: String },
    price: { type: Number },
    description: { type: String },
    stock: { type: Number },
})

const Product = model("products", productSchema);

const getAllProducts = () => {
   return Product.find();
}

const getProductById = (id) => {
    return Product.findById(id);
}

const createProduct = (newProduct) => {
    const product = new Product(newProduct);
    return product.save();
}

const updateProduct = (id, updateProduct) => {
    return Product.findByIdAndUpdate(id, updateProduct);
}

const deleteProduct = (id) => {
    return Product.findByIdAndDelete(id);
}

export default { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };