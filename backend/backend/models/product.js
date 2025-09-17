import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    cuisineType: { type: String, required: true },
    images: [{ type: String }], // array of URLs
    isVeg: { type: Boolean, required: true },
    prepTime: { type: Number, required: true }, // in minutes
    ingredients: [{ type: String }],
    price: { type: Number, required: true }, // single price, not array
    isExclusive: { type: Boolean, default: false },
    isAvailable: { type: Boolean, default: true },
    category: { type: String,
      enum: ['Instant', 'Scheduled'], //restrict the values to be determined
    default: 'Instant', required: true },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
