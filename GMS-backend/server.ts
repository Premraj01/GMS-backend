import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import connectDB from "./config/db";
import { notFound, errorHandler } from "./middleware/errorMiddleware";


// Routes
import customerRoutes from "./routes/customerRoutes";
import productRoutes from "./routes/productRoutes"

import morgan from "morgan";

const PORT = process.env.PORT || 5002;
const app = express();

// Middleware to accept JSON in body
app.use(express.json());

// Morgan logging
app.use(morgan("dev"));

dotenv.config();

connectDB();

app.get("/", (req: Request, res: Response) => {
	res.send("API IS RUNNING...");
});

app.use("/api/customer/", customerRoutes);
app.use("/api/product/", productRoutes);

// Make uploads folder static
const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// Use Middleware
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
	console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
