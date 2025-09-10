import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Chef from "./models.js";

dotenv.config();

const app = express();
app.use(express.json());

// GET /chefs → return list of chefs
app.get("/chefs", async (req, res) => {
  try {
    const chefs = await Chef.find();
    res.json(chefs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /book → pretend to book a chef
app.post("/book", async (req, res) => {
  try {
    const { chefId } = req.body;
    // for now just mark availability = false
    const chef = await Chef.findByIdAndUpdate(
      chefId,
      { availability: false },
      { new: true }
    );
    res.json({ message: "Chef booked!", chef });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// TEST route
app.get("/", (req, res) => {
  res.send("API is working 🚀");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ MongoDB Connected!");
    // Seed initial data if collection is empty
    try {
      const count = await Chef.countDocuments();
      if (count === 0) {
        await Chef.create([
          { name: "Gordon Ramsay", cuisine: "British", price: 500, rating: 5 },
          { name: "Sanjeev Kapoor", cuisine: "Indian", price: 300, rating: 4.5 },
          { name: "Nobu Matsuhisa", cuisine: "Japanese", price: 700, rating: 5 }
        ]);
        console.log('Seeded initial chefs.');
      }
    } catch (err) {
      console.error('Error seeding chefs:', err);
    }

    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB Error:", err));

  