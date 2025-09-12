// seed.js
import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "./user.js"; // ensure .js extension and correct relative path
import Chef from "./models/chef.js";
import Product from "./models/product.js";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/chefoncall";

async function main() {
  // connect (no deprecated options)
  await mongoose.connect(MONGO_URI);

  console.log("Connected to MongoDB");

  // Clear old data
  await User.deleteMany();
  await Chef.deleteMany();
  await Product.deleteMany();

  // Insert chefs
  const chefs = await Chef.insertMany([
    { name: "Gordon Ramsay", cuisine: "British", rating: 5 },
    { name: "Sanjeev Kapoor", cuisine: "Indian", rating: 4.5 },
  ]);

  // Insert products (attach to chefs)
  const products = await Product.insertMany([
    {
      name: "Fish & Chips",
      cuisine: "British",
      price: 500,
      chef: chefs[0]._id,
      category: "Main Course",
      description: "Crispy fried fish with chips and tartar sauce",
    },
    {
      name: "Butter Chicken",
      cuisine: "Indian",
      price: 300,
      chef: chefs[1]._id,
      category: "Main Course",
      description: "Creamy tomato-based curry with tender chicken pieces",
    },
  ]);

  // Update chefs with product references
  chefs[0].products.push(products[0]._id);
  chefs[1].products.push(products[1]._id);
  await chefs[0].save();
  await chefs[1].save();

  const users = [
    { name: "Alice", email: "alice@example.com", password: "hashed-password" },
    { name: "Bob", email: "bob@example.com", password: "hashed-password" },
  ];

  await User.create(users);

  console.log("Seeding completed");
  await mongoose.disconnect();
  process.exit(0);
}

main().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
