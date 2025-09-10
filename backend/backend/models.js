import mongoose from "mongoose";

const chefSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cuisine: { type: String, required: true },
  availability: { type: Boolean, default: true },
  price: { type: Number, required: true },
  rating: { type: Number, default: 0 },
});

const Chef = mongoose.model("Chef", chefSchema);

export default Chef;
