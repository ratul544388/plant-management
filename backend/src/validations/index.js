import { z } from "zod";
import {
  CareLevels,
  HealthStatuses,
  PlantCategories,
} from "../constants/enum.js";

export const plantSchema = z.object({
  image: z.string().url({ message: "Image must be a valid URL" }),
  name: z.string().min(2, {
    message: "Plant name is required and must be at least 2 characters",
  }),
  category: z.enum(PlantCategories, {
    required_error: "Category is required",
  }),
  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters long" }),
  careLevel: z.enum(CareLevels, {
    required_error: "Care level is required",
  }),
  lastWateredDate: z.date(),
  nextWateringDate: z.date(),
  healthStatus: z.enum(HealthStatuses, {
    required_error: "Health status is required",
  }),
  userEmail: z.string().email({ message: "Valid email is required" }),
  userName: z
    .string()
    .min(2, { message: "User name must be at least 2 characters" }),
});
