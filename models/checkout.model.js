import mongoose, { Schema } from "mongoose";
import { V4 as uuidv4 } from "uuid";

const checkoutSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  country: {
    type: String,
    required: true,
  },
  streetAddress: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
});

const Checkout = mongoose.model("Checkout", checkoutSchema);
export default Checkout;
