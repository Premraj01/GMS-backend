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

const getProductByProductCode = expressAsyncHandler(async (req, res) => {
  //console.log(req.params);
  const { productCode } = req.params as { productCode: string };
  const products: Product[] = await ProductSchema.find({
    productCode: productCode,
  });
  //console.log(products);
  if (products) {
    res.json(products);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export { getProducts, getProductByProductCode };
