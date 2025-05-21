import Plant from "../models/plant.model.js";
import { asyncHandler } from "../utils/async-handler.js";

// CREATE a new plant
export const createPlant = asyncHandler(async (req, res) => {
  const { userName, userEmail } = req.body;
  const newPlant = await Plant.create({
    ...req.body,
    userName,
    userEmail,
  });
  res.status(201).json({
    message: "Plant added successfully",
    data: newPlant,
  });
});

// GET all plants
export const getAllPlants = asyncHandler(async (req, res) => {
  const plants = await Plant.find();
  res.status(200).json({ success: true, data: plants });
});

// GET single plant by ID
export const getPlantById = asyncHandler(async (req, res) => {
  const plant = await Plant.findById(req.params.id);
  if (!plant) {
    return res.status(404).json({ success: false, message: "Plant not found" });
  }
  res.status(200).json({ success: true, data: plant });
});

// GET plants by user email
export const getPlantsByUserEmail = asyncHandler(async (req, res) => {
  const { email: userEmail } = req.params;
  const plants = await Plant.find({ userEmail });
  res.status(200).json({ success: true, data: plants });
});

// UPDATE plant by ID
export const updatePlant = asyncHandler(async (req, res) => {
  const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedPlant) {
    return res.status(404).json({ success: false, message: "Plant not found" });
  }

  res.status(200).json({
    success: true,
    message: "Plant updated successfully",
    data: updatedPlant,
  });
});

// DELETE plant by ID
export const deletePlant = asyncHandler(async (req, res) => {
  const deletedPlant = await Plant.findByIdAndDelete(req.params.id);
  if (!deletedPlant) {
    return res.status(404).json({ success: false, message: "Plant not found" });
  }
  res
    .status(200)
    .json({ success: true, message: "Plant deleted successfully" });
});
