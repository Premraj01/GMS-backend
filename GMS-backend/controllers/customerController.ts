import asyncHandler from "express-async-handler";
import { Customer } from "../models";

/**
 * Get all customers
 * @route GET /api/customers
 * @access Private
 */
const getCustomers = asyncHandler(async (req, res) => {
	const customers = await Customer.find();

	if (customers) {
		res.json(customers);
	} else {
		res.status(404);
		throw new Error("User not found");
	}
});
/**
 * Get all customer by id
 * @route GET /api/customers
 * @access Private
 */
const getCustomerById = asyncHandler(async (req, res) => {
	const { id } = req.params as { id: string };
	const customer = await Customer.findById(id);

	if (customer) {
		res.json(customer);
	} else {
		res.status(404);
		throw new Error("User not found");
	}
});
/**
 * Get all customers
 * @route GET /api/customers
 * @access Private
 */
const getCustomerByMobile = asyncHandler(async (req, res) => {
	const { contactNumber } = req.params as { contactNumber: string };
	const customer = await Customer.findOne({ contactNumber: contactNumber });

	if (customer) {
		res.json(customer);
	} else {
		res.status(404);
		throw new Error("User not found");
	}
});

export { getCustomers, getCustomerById, getCustomerByMobile };
