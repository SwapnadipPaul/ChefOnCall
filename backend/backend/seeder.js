import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/product.js"; // your product model
import products from "./data/products.js"; // your product data array
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Product.deleteMany(); // clear old data
    await Product.insertMany(products); // insert products
    console.log("✅ Products imported successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error importing data:", error);
    process.exit(1);
  }
};

importData();
