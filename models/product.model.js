import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const productSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    ref: "Category",
  },
});

const Product = mongoose.model("Product", productSchema);
export default Product;
