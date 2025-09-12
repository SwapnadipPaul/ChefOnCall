import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: String,
  image: String,
  inStock: { type: Boolean, default: true }
});

export default mongoose.model("Product", productSchema);
