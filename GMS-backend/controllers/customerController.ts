import asyncHandler from "express-async-handler";
import { CustomerSchema } from "../models";

/**
 * Get all customers
 * @route GET /api/customers
 * @access Private
 */
const getCustomers = asyncHandler(async (req, res) => {
  const customers = await CustomerSchema.find();

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
  const customer = await CustomerSchema.findById(id);

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
  const customer = await CustomerSchema.findOne({
    contactNumber: contactNumber,
  });

  if (customer) {
    res.json(customer);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

/**
 *  all customers
 * @route post /api/customers
 * @access Private
 */
const registerCustomer = asyncHandler(async (req, res) => {
  const { name, address, machine, communication } = req.body;
  const customerExists = await CustomerSchema.findOne({
    "communication.contactNumber": communication.contactNumber,
  });
  //console.log(customerExists);
  if (customerExists) {
    res.status(400);
    throw new Error("Customer already exists");
  }

  const customer = await CustomerSchema.create({
    name,
    "communication.contactNumber": communication.contactNumber,
  });
  if (customer) {
    res.status(201).json({
      _id: customer._id,
      name: customer.name,
      "communication.contactNumber": communication.contactNumber,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

export { getCustomers, getCustomerById, getCustomerByMobile, registerCustomer };
