import express from "express";
import { router as mathRoutes } from "./routes/mathRoutes.js"; 
const app = express();
app.use(express.json());  

app.use("/math", mathRoutes);  

export { app };  
