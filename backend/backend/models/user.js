import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },   // hash before saving!
  rating: { type: Number, default: 1, min: 1, max: 10, required: true },
  orderCount: { type: Number, default: 0, required: true },
  location: { type: String, required: false },  // set by admin/system
  phone: { type: String, required: false },     // optional but useful
  isVerified: { type: Boolean, default: false }, // email/phone verification
  role: { type: String, enum: ["user", "admin"], default: "user" } // good for future scaling
}, { timestamps: true });

export const User = mongoose.model("User", userSchema);

/*
#1 :

name : John David
Email : johnDavid293@gmail.com
Password : johndavidisgreat
rating : 8
orderCount : 24
location : Bengaluru
phone : 9876543210
isVerified : True 
role : user

#2:

name : AdminB1
Email : admin@admin.admin.com
Password : admin@chefoncall123
rating : 10
orderCount : 100
location : Bengaluru
phone : 9108606005
isVerified : True 
role : admin */