import wineModels from "../models/wineModels.js"

const getAllWines = async (req, res) => {
    try {
        const wines = await wineModels.getAllWines();
        res.json(wines);
    } catch (error) {
        res.status(500).json({ error: "server error" });
    };
};

const getWineById = async (req, res) => {
    try {
        const { id } = req.params;
        const wine = await wineModels.getWineById(id);

        if(!wine) res.status(404).json({ error: "wine not found" });
        res.json(wine);

    } catch (error) {
        res.status(500).json({ error: "server error" });
    };
};

const createWine = async (req, res) => { 
    try {
        const { name, brand, harvest, variety, price, description, stock } = req.body;

        if(!name || !brand || !harvest || !variety || !price || !description || !stock) {
            res.status(400).json({ error: "bad request, invalid data" });
        };

        const newWine = await wineModels.createWine({ name, brand, variety, harvest, price, description, stock });
        res.status(201).json(newWine);

    } catch (error) {
        res.status(500).json({ error: "server error" });
    };
};

const updateWine = async (req, res) => {
    try {
        const { id } = req.params;
        const { body } = req;
        const wine = await wineModels.updateWine(id, body);

        if(!wine) res.status(404).json({ error: "wine not found" });
        res.json("deleted wine");
    } catch (error) {
        res.status(500).json({ error: "server error" });
    };
};

const deleteWine = async (req, res) => {
    try {
        const { id } = req.params;
        const wine = await wineModels.deleteWine(id);

        if(!wine) res.status(404).json({ error: "wine not found" });
        res.json("deleted wine");
        
    } catch (error) {
        res.status(500).json({ error: "server error" });
    };
};

export { getAllWines, getWineById, createWine, updateWine, deleteWine };
