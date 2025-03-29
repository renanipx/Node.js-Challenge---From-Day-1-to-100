
import express from "express";
import { add } from "../controllers/mathController.js"; 

const router = express.Router();

router.post("/add", add); 

export { router };  
