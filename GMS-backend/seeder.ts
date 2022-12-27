import dotenv from "dotenv";
// import { customers } from "./data/customer";
import { product } from "./data/product";
import { Product } from "./models/";
import { ProductDocument } from "./types/";
import connectDB from "./config/db";

/**
 * Helper file that is used for adding and removing test data to the database
 */

dotenv.config();

connectDB();

/**
 * Destroy existing data and seed new data into the database
 * This will populate a list of products with a default admin user
 */
const importData = async () => {
	try {
		// Clear any existing items from DB
		// await Customer.deleteMany();
		await Product.deleteMany();

		const productCreated = await Product.insertMany(product);
	} catch (error) {
		console.error(`${error}`);
		process.exit(1);
	}
};

/**
 * Destroy all data on the database
 */
// const destroyData = async () => {
// 	try {
// 		// Clear any existing items from DB
// 		await Customer.deleteMany();

// 		console.log("Data Destroyed!");

// 		process.exit();
// 	} catch (error) {
// 		console.error(`${error}`);
// 		process.exit(1);
// 	}
// };

// Check command line args to destroy or import data
// process.argv[2] === "-d" ? destroyData() : importData();
