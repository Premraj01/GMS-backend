import { model, Schema } from "mongoose";
import { CustomerDocument } from "../types/customer";

const customerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    address: {
      addressLine1: {
        type: String,
      },
      taluka: {
        type: String,
      },
      city: {
        type: String,
      },
      pinCode: {
        type: String,
      },
    },
    machine: [
      {
        model: {
          type: String,
        },
        name: {
          type: String,
        },
        modelYear: {
          type: String,
        },
      },
    ],

    communication: {
      email: {
        type: String,
        unique: true,
      },
      contactNumber: {
        type: String,
        unique: true,
        required: true,
      },
      countryCode: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

export const CustomerSchema = model<CustomerDocument>(
  "collection_Customer",
  customerSchema
);
