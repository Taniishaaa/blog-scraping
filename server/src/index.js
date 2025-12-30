import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import articleRoutes from "./routes/articleRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use("/articles", articleRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
