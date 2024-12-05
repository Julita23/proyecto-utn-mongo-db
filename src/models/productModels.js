//manipulacion de datos en la DB
//retorna esta peticion en la base de datos al controller.
import mongoose, { mongo } from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String },
    price: { type: Number },
    description: { type: String },
    stock: { type: Number },
})

const Product = mongoose.model("products", productSchema);

const getAllProducts = () => {
   return Product.find();
}

const getProductById = (id) => {
    return Product.findById(id);
}

const createProduct = (newProduct) => {
    const product = new Product(newProduct);
    const saveProduct = product.save();
    return saveProduct;
}

const updateProduct = (id, updateProduct) => {
    return Product.findByIdAndUpdate(id, updateProduct);
}

const deleteProduct = (id) => {
    return Product.findByIdAndDelete(id);
}

export default { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };