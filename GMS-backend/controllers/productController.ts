import expressAsyncHandler from "express-async-handler";
import { Product } from "../models";

/**
 * Get all product
 * @route GET /api/product
 * @access Private
 */
const getProducts = expressAsyncHandler(async (req, res) => {
	const products = await Product.find();

	if (products) {
		res.json(products);
	} else {
		res.status(404);
		throw new Error("User not found");
	}
});

const getProductById = expressAsyncHandler(async (req, res) => {
	console.log("pp", req.params);
});

export { getProducts, getProductById };
