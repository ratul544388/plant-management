import { HealthStatuses } from "../constants/enum.js";
import Plant from "../models/plant.model.js";
import { asyncHandler } from "../utils/async-handler.js";

// CREATE a new plant
export const createPlant = asyncHandler(async (req, res) => {
  const { userName, userEmail, slug } = req.body;
  const existingSlug = await Plant.findOne({ slug });

  if (existingSlug) {
    return res
      .status(409)
      .json({ message: "Slug Already exist", field: "slug" });
  }

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

// Get all plants
export const getPlants = asyncHandler(async (req, res) => {
  const { q } = req.query;
  const limit = parseInt(req.query.limit) || 100;

  let filter = {};
  if (q) {
    const regex = new RegExp(q, "i");
    filter = {
      $or: [
        { name: { $regex: regex } },
        { category: { $regex: regex } }
      ]
    };
  }

  const plants = await Plant.find(filter)
    .sort({ createdAt: -1 })
    .limit(limit);

  res.status(200).json({ success: true, data: plants });
});


// GET single plant by ID
export const getPlantBySlug = asyncHandler(async (req, res) => {
  const { slug } = req.params;
  const plant = await Plant.findOne({ slug });
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
  const { slug } = req.body;
  const { plantId } = req.query;

  const existingSlug = await Plant.findOne({ slug, _id: { $ne: plantId } });

  if (existingSlug) {
    return res.status(400).json({
      success: false,
      message: "Slug already exists. Please choose a different one.",
    });
  }

  const updatedPlant = await Plant.findByIdAndUpdate(plantId, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedPlant) {
    return res.status(404).json({
      success: false,
      message: "Plant not found",
    });
  }

  res.status(200).json({
    success: true,
    message: "Plant updated successfully",
    data: updatedPlant,
  });
});

// DELETE plant by ID
export const deletePlant = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedPlant = await Plant.findByIdAndDelete(id);
  if (!deletedPlant) {
    return res.status(404).json({ success: false, message: "Plant not found" });
  }
  res
    .status(200)
    .json({ success: true, message: "Plant deleted successfully" });
});


// GET DASHBOARD DATA;
export const getDashboardStats = asyncHandler(async (req, res) => {
  // Total plant count
  const totalPlants = await Plant.countDocuments();

  // Count grouped by healthStatus
  const healthStats = await Plant.aggregate([
    {
      $group: {
        _id: "$healthStatus",
        count: { $sum: 1 }
      }
    }
  ]);

  const healthStatusCounts = {};

  HealthStatuses.forEach(status => {
    const match = healthStats.find(item => item._id === status);
    healthStatusCounts[status] = match ? match.count : 0;
  });

  res.status(200).json({
    success: true,
    data: {
      totalPlants,
      healthStatusCounts
    }
  });
});
