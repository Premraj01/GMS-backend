import express from "express";
import {
  getProducts,
  getProductByProductCode,
  getProductById,
} from "../controllers/productController";

const router = express.Router();

router.route("/").get(getProducts);
router.route("/:productCode").get(getProductByProductCode);
router.route("/:id").get(getProductById);

export default router;
