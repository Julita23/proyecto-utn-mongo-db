import { Schema, model } from "mongoose";

const wineSchema = new Schema({
    name: { 
        type: String, 
        required: [true, "El nombre del vino es obligatorio"], 
        trim: true,
        minlength: [3, "El nombre debe tener al menos 3 caracteres"], 
        maxlength: [100, "El nombre no puede exceder los 100 caracteres"] 
    },
    brand: { 
        type: String, 
        required: [true, "La marca del vino es obligatoria"], 
        trim: true,
        maxlength: [50, "La marca no puede exceder los 50 caracteres"] 
    },
    harvest: { 
        type: Number, 
        required: [true, "El año de cosecha es obligatorio"], 
        min: [1900, "El año de cosecha no puede ser anterior a 1900"], 
        max: [new Date().getFullYear(), "El año de cosecha no puede ser en el futuro"] 
    },
    variety: { 
        type: String, 
        required: [true, "La variedad del vino es obligatoria"], 
        trim: true,
        enum: {
            values: ["Cabernet Sauvignon", "Merlot", "Chardonnay", "Pinot Noir", "Syrah", "Malbec"],
            message: "La variedad debe ser una de las siguientes: Cabernet Sauvignon, Merlot, Chardonnay, Pinot Noir, Syrah, Malbec"
        }
    },
    price: { 
        type: Number, 
        required: [true, "El precio es obligatorio"], 
        min: [0, "El precio no puede ser negativo"] 
    },
    description: { 
        type: String, 
        trim: true,
        maxlength: [500, "La descripción no puede exceder los 500 caracteres"] 
    },
    stock: { 
        type: Number, 
        required: [true, "El stock es obligatorio"], 
        min: [0, "El stock no puede ser negativo"], 
        validate: {
            validator: Number.isInteger,
            message: "El stock debe ser un número entero"
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
