import { model, Schema } from "mongoose";
import { ProductDocument } from "../types/product";

const productSchema = new Schema();

export const Customer = model<ProductDocument>(
	"collection_Customer",
	productSchema,
);
