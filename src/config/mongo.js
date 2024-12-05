//configuracion para la conexion a la base de datos
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const URI_DB = process.env.URI_DB;

const connectDb = async () => {
    try {
        await mongoose.connect(URI_DB)
        console.log("conexion exitosa a la DB");
    } catch (error) {
        console.log("conexion fallida a la DB");
    }
};

export { connectDb };