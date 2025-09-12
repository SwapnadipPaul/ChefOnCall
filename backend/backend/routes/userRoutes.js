import express from "express";
import { registerUser, authUser } from "../controllers/userController.js";

const router = express.Router();

// signup
router.post("/register", registerUser);

// login
router.post("/login", authUser);

export default router;
