import { model, Schema } from "mongoose";
import { ProductDocument } from "../types/product";

const productSchema = new Schema(
	{
		category: {
			type: String,
		},
		productCode: {
			type: String,
			required: true,
		},

		productName: {
			type: String,
			required: true,
		},

		productCost: {
			type: Number,
			required: true,
		},
		GST: {
			type: String,
			required: true,
		},

		MRP: {
			type: Number,
			required: true,
		},

		saleCost: {
			type: Number,
		},

		unit: {
			type: String,
			required: true,
		},

		status: {
			type: Boolean,
			required: true,
		},

		location: {
			type: String,
		},

		manufacturingCompany: {
			type: String,
		},

		hsnCode: {
			type: String,
		},

		date: {
			type: String,
		},

		minimumStock: {
			type: Number,
		},
	},
	{
		timestamps: true,
	},
);

export const ProductSchema = model<ProductDocument>(
	"collection_Product",
	productSchema,
);
