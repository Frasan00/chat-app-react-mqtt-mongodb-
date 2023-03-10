import express from "express";
import { register, login, logout } from "../controllers/authController";
import { dataValidation } from "../middlewares/dataValidation";

const router = express.Router();

// base "/auth"
router.post("/register", dataValidation, register); // posts a new user
router.post("/login", dataValidation, login); // posts a new session
router.delete("/logout/:userName", logout) // eliminates a session

export default router;