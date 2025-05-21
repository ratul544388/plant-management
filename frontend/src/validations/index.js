import { z } from "zod";
import {
  CareLevels,
  HealthStatuses,
  PlantCategories,
} from "@/constants/enums.js";

export const registerSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    imageUrl: z.string().optional(),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter"),
    confirmPassword: z.string().min(6, "Confirm Password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const updateProfileSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  imageUrl: z.string().optional(),
});

export const changePasswordSchema = z
  .object({
    currentPassword: z.string().min(6, "Current password is required"),
    newPassword: z
      .string()
      .min(6, "New password must be at least 6 characters"),
    confirmNewPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Passwords do not match",
    path: ["confirmNewPassword"],
  });

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
  wateringFrequency: z.string().min(1, "Watering Frequency is required"),
  slug: z
    .string()
    .min(1, { message: "Slug is required" })
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
      message: "Slug must be lowercase, URL-safe, and use hyphens (-) only",
    }),
});
