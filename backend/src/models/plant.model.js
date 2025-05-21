import mongoose from "mongoose";
import {
  CareLevels,
  PlantCategories,
  HealthStatuses,
} from "../constants/enum.js";

const plantSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    category: {
      type: String,
      enum: PlantCategories,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    careLevel: {
      type: String,
      enum: CareLevels,
      required: true,
    },
    wateringFrequency: {
      type: String,
      required: true,
    },
    lastWateredDate: {
      type: Date,
      required: true,
    },
    nextWateringDate: {
      type: Date,
      required: true,
    },
    healthStatus: {
      type: String,
      enum: HealthStatuses,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const plant = mongoose.model("Plant", plantSchema);

export default plant;
