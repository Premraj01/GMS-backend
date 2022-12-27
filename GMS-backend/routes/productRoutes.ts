import express from "express";
import {
	getProducts,
	getProductByProductCode,
} from "../controllers/productController";

const router = express.Router();

router.route("/").get(getProducts);
router.route("/:productCode").get(getProductByProductCode);

export default router;
