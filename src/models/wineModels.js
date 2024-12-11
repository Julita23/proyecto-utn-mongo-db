import { Schema, model } from "mongoose";

const wineSchema = new Schema({
    name: { 
        type: String, 
        required: [true, "The name of the wine is mandatory"], 
        trim: true,
        minlength: [3, "The name must be at least 3 characters"], 
        maxlength: [100, "The name cannot exceed 100 characters"] 
    },
    brand: { 
        type: String, 
        required: [true, "The wine brand is mandatory"], 
        trim: true,
        maxlength: [50, "The mark cannot exceed 50 characters"] 
    },
    harvest: { 
        type: Number, 
        required: [true, "Harvest year is mandatory"], 
        min: [1900, "The harvest year cannot be before 1900"], 
        max: [new Date().getFullYear(), "The harvest year cannot be in the future"] 
    },
    variety: { 
        type: String, 
        required: [true, "The variety of wine is mandatory"], 
        trim: true,
        enum: {
            values: ["Cabernet Sauvignon", "Merlot", "Chardonnay", "Pinot Noir", "Syrah", "Malbec"],
            message: "The variety must be one of the following: Cabernet Sauvignon, Merlot, Chardonnay, Pinot Noir, Syrah, Malbec"
        }
    },
    price: { 
        type: Number, 
        required: [true, "The price is mandatory"], 
        min: [0, "The price cannot be negative"] 
    },
    description: { 
        type: String, 
        trim: true,
        maxlength: [500, "Description cannot exceed 500 characters"] 
    },
    stock: { 
        type: Number, 
        required: [true, "Stock is required"], 
        min: [0, "Stock cannot be negative"], 
        validate: {
            validator: Number.isInteger,
            message: "Stock must be an integer"
        }
    },
}, {
    timestamps: true,
});

const Wine = model("wines", wineSchema);

const getAllWines = () => {
   return Wine.find();
}

const getWineById = (id) => {
    return Wine.findById(id);
}

const createWine = (newWine) => {
    const wine = new Wine(newWine);
    return wine.save();
}

const updateWine = (id, updateWine) => {
    return Wine.findByIdAndUpdate(id, updateWine);
}

const deleteWine = (id) => {
    return Wine.findByIdAndDelete(id);
}

export default { getAllWines, getWineById, createWine, updateWine, deleteWine };
