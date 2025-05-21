import express from "express";
import {
  createPlant,
  deletePlant,
  getAllPlants,
  getPlantById,
  getPlantsByUserEmail,
  updatePlant,
} from "../controllers/plant.controller.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.json({ message: "Still working" });
});

router.get("/", getAllPlants);

router.get("/:id", getPlantById);

router.get("/user/:email", getPlantsByUserEmail);

router.post("/", createPlant);

router.put("/:id", updatePlant);

router.delete("/:id", deletePlant);


export default router;
