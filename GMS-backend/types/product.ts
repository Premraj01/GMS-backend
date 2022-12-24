import { Model, Document } from "mongoose";

export interface Product {}

export interface ProductDocument extends Product, Document {}
export interface ProductModel extends Model<ProductDocument> {}
