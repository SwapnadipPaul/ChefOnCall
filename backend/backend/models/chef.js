import mongoose from "mongoose";

const chefSchema = new mongoose.Schema({
  name: { type: String, required: true },
  cuisine: String,
  availability: { type: Boolean, default: true },
  rating: { type: Number, default: 0 },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }]
});

export default mongoose.model("Chef", chefSchema);
