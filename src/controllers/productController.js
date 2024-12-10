import productModels from "../models/productModels.js"

const getAllProducts = async (req, res) => {
    try {
        const products = await productModels.getAllProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "server error" });
    }
}

const getProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productModels.getProductById(id);

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

        const newProduct = await productModels.createProduct({ name, price, description, stock });
        res.status(201).json(newProduct);

    } catch (error) {
        res.status(500).json({ error: "server error" });
    }
}

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const product = await productModels.updateProduct(id, body);

        if(!product) res.status(404).json({ error: "product not found" });
        res.json("deleted product");
    } catch (error) {
        res.status(500).json({ error: "server error" });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await productModels.deleteProduct(id);

        if(!product) res.status(404).json({ error: "product not found" });
        res.json("deleted product");
        
    } catch (error) {
        res.status(500).json({ error: "server error" });
    }
}

export { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };