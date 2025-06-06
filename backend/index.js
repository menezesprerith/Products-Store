import express from "express";
import dotenv from "dotenv";
import path from "path";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { fileURLToPath } from "url";

// Routes
import productRoutes from "./routes/product.route.js";
import userRoutes from "./routes/user.route.js";

// Load environment variables
dotenv.config();



// Initialize express
const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
  origin:[ "http://localhost:3000","http://localhost:5173", "http://localhost:5000","https://lucent-duckanoo-5486d7.netlify.app","https://verdant-basbousa-3c8aff.netlify.app"],
   methods: '*', // Allowed method
  credentials: true
}));

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
