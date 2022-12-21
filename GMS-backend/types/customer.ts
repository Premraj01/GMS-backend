import { Model, Document } from "mongoose";

/**
 * Represents a user
 */
export interface Customer {
	name: string;
	address: Address;

	communication: Communication;
	machine: Machine[];
}

interface Communication {
	email: string;
	contactNumber: string;
	countryCode: string;
}

interface Address {
	addressLine: string;
	taluka: string;
	city: string;
	pinCode: string;
}

interface Machine {
	model: string;
	name: string;
	modelYear: string;
}

export interface CustomerDocument extends Customer, Document {}
export interface CustomerModel extends Model<CustomerDocument> {}
