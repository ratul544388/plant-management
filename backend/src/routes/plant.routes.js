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

router.get("/test-db", async (req, res) => {
  try {
    const onePlant = await Plant.findOne(); // Try to query something simple
    res.status(200).json({
      success: true,
      message: "MongoDB is connected and working!",
      data: onePlant,
    });
  } catch (error) {
    console.error("MongoDB Test Error:", error);
    res.status(500).json({
      success: false,
      message: "MongoDB connection failed",
      error: error.message,
    });
  }
});


router.get("/", getAllPlants);

router.get("/:id", getPlantById);

router.get("/user/:email", getPlantsByUserEmail);

router.post("/", createPlant);

router.put("/:id", updatePlant);

router.delete("/:id", deletePlant);


export default router;
