import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const cartSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  user: {
    type: String,
    ref: "User",
    required: true,
  },
  product: [
    {
      type: String,
      ref: "Product",
      required: true,
    },
  ],
  price: {
    type: String,
    required: true,
  },
});

const Cart = mongoose.model("Cart", cartSchema);
export default Cart;
