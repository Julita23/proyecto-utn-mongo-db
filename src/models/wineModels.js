import { Schema, model } from "mongoose";

const wineSchema = new Schema({
    name: { type: String },
    brand: { type: String },
    harvest: { type: Number },
    variety: { type: String },
    price: { type: Number },
    description: { type: String },
    stock: { type: Number },
})

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
