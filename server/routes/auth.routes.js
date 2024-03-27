import express from "express";

const router = express.Router();

import { login, signup, logout } from "../controllers/auth.controller.js";

// signup router logic
router.post("/signup", signup);

// login router logic
router.post("/login", login);

// logout router logic
router.post("/logout", logout);

export default router;
