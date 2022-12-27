import { Model, Document } from "mongoose";

export interface Product {
	category: string;
	productCode: string;
	productName: string;
	productCost: number;
	GST?: number;
	MRP: number;
	salesCost: number;
	status: boolean;
	location: string;
	manufacturingCompany: string;
	hsnCode: string;
	date: string;
	minimumStock: number;
	unit: number;
}

export interface ProductDocument extends Product, Document {}
export interface ProductModel extends Model<ProductDocument> {}
