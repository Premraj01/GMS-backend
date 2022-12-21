import express from "express";
import {
	getCustomerById,
	getCustomerByMobile,
	getCustomers,
} from "../controllers/customerController";
import { admin, protect } from "../middleware/authMiddleware";

const router = express.Router();

router.route("/").get(getCustomers);
router.route("/:id").get(getCustomerById);
router.route("/:contactNumber").get(getCustomerByMobile);

export default router;
