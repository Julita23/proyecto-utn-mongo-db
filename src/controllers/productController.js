//1. recibir el inputo
//2. responderle al cliente con los diferentes casos(exito y no exito)

import productModels from "../models/productModels.js"
console.log(productModels);

const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModels.getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "server error" });
    }
}

const getProductById = (req, res) => {
    try {
        const { id } = req.params;
        const product = ProductModels.getProductById(id);

        if(!product) res.status(404).json({ error: "product not found" });
        res.json(product);

    } catch (error) {
        res.status(500).json({ error: "server error" });
    }
}

const createProduct = async (req, res) => { 
    try {
        const { name, price, description, stock } = req.body;

        if(!name || !price || !description || !stock) {
            res.status(400).json({ error: "bad request, invalid data" });
        };

        const newProduct = await ProductModels.createProduct({ name, price, description, stock });
        res.status(201).json(newProduct);

    } catch (error) {
        res.status(500).json({ error: "server error" });
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const product = await ProductModels.updateProduct(id, body);

        if(!product) res.status(404).json({ error: "product not found" });
        res.json("deleted product");
    } catch (error) {
        res.status(500).json({ error: "server error" });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await ProductModels.deleteProduct(id);

        if(!product) res.status(404).json({ error: "product not found" });
        res.json("deleted product");
        
    } catch (error) {
        res.status(500).json({ error: "server error" });
    }
}

export { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };