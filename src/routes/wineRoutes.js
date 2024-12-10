import { Router } from "express";
import { getAllWines, getWineById, createWine, updateWine, deleteWine } from "../controllers/wineController.js"
import { auth } from "../middleware/authMiddleware.js"
const wineRoutes = Router();

wineRoutes.get("/", auth, getAllWines);
wineRoutes.get("/:id", getWineById);
wineRoutes.post("/", createWine);
wineRoutes.patch("/:id", updateWine);
wineRoutes.delete("/:id", deleteWine);

export { wineRoutes };