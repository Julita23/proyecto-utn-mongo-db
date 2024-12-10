import mongoose from "mongoose";
process.loadEnvFile();

const URI_DB = process.env.URI_DB;

const connectDb = async () => {
    try {
        await mongoose.connect(URI_DB)
        console.log("conexion exitosa a la DB");
    } catch (error) {
        console.log("conexion fallida a la DB", error);
    }
};

export { connectDb };