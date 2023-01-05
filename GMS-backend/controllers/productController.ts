import expressAsyncHandler from "express-async-handler";
import { ProductSchema } from "../models";
import { Product } from "../types";

/**
 * Get all product
 * @route GET /api/product
 * @access Private
 */
const getProducts = expressAsyncHandler(async (req, res) => {
	const products = await ProductSchema.find();

	if (products) {
		res.json(products);
	} else {
		res.status(404);
		throw new Error("User not found");
	}
});

/**
 *Get Product By ProductCode
 */
const getProductByProductCode = expressAsyncHandler(async (req, res) => {
	//console.log(req.params);
	const ProductCode = req.params;
	const products: Product[] = await ProductSchema.find({
		productCode: ProductCode,
	});
	//console.log(products);
	if (products) {
		res.json(products);
	} else {
		res.status(404);
		throw new Error("Product not found");
	}
});

/**
 * Product By ProductId
 */
const getProductById = expressAsyncHandler(async (req, res) => {
	const { id } = req.params;
	const products = await ProductSchema.findById(req.params.id);
	console.log(id);
	if (products) {
		res.json(products);
	} else {
		res.status(404);
		throw new Error("ProductId not found");
	}
});

export { getProducts, getProductByProductCode, getProductById };
