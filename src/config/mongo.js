import mongoose from "mongoose";
process.loadEnvFile();

const URI_DB = process.env.URI_DB;

const connectDb = async () => {
    try {
        await mongoose.connect(URI_DB)
        console.log("successful connection to the data base");
    } catch (error) {
        console.log("failed connection to the data base", error);
    }
};

export { connectDb };