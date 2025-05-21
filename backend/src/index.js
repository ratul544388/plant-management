import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import plantRoutes from "./routes/plant.routes.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(
  cors({
    origin: process.env.VITE_APP_URL,
    credentials: true,
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    message: "Server is running",
  });
});

app.use("/api/plants", plantRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  mongoose
    .connect("mongodb+srv://ratul:ratul@cluster0.pa8rk5r.mongodb.net/programming-hero-assignment-10")
    .then(() => {
      console.log("✅✅✅Conncted to MongoDB");
    })
    .catch(() => {
      console.error("❌❌❌Failed to connect MongoDB");
    });
});
