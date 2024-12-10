import express from "express";
import { wineRoutes } from "./src/routes/wineRoutes.js";
import { connectDb } from "./src/config/mongo.js";
import { authRoutes } from "./src/routes/authRoutes.js";

process.loadEnvFile();

const PORT = process.env.PORT;

const app = express();

app.use(express.json())
app.use("/api/wines", wineRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connectDb();
    console.log("Server up on port http://localhost:" + PORT);
})