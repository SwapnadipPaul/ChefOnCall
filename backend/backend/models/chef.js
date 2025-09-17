import mongoose from "mongoose";

const chefSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },   // to avoid duplicates
  password: { type: String, required: true },              // should be hashed before saving
  rating: { type: Number, default: 1, min: 1, max: 10, required: true },
  orderCount: { type: Number, default: 1, required: true },
  location: { type: String, required: false },
  negotiationVariable: { type: Number, default: 0, required: false },
  availability: { 
    type: String,
    enum: ['Available', 'Busy', 'Offline'], //restrict the values to be determined
    default: 'Available',
    required: true
  },
  experience: { type: Number, required: true }, // years of experience maybe
  cuisineSpecialty: { type: String, required: true },
  dishesExclusiveToChef: { type: [String], required: false }, // array of dish names exclusive to chef -- Added  by Chef
}, { timestamps: true }); // adds createdAt & updatedAt automatically

export default mongoose.model("Chef", chefSchema);
