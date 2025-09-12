import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Product from "./models/product.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use('/api/users', userRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

// get all products
app.get("/api/products", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// get single product
app.get("/api/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (product) res.json(product);
    else res.status(404).json({ message: "Product not found" });
  } catch {
    res.status(400).json({ message: "Invalid ID" });
  }
});

const PORT = process.env.PORT || 5001;

async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`🚀 Server started on PORT: ${PORT}`));
  } catch (err) {
    console.error("Failed to start server:", err);
    process.exit(1);
  }
}

startServer();

// error middlewares
app.use(notFound);
app.use(errorHandler);

process.on('unhandledRejection', (reason) => {
  console.error('Unhandled Rejection:', reason);
});
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});
