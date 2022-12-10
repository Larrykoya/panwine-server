import mongoose, { Schema } from "mongoose";
import { v4 as uuidv4 } from "uuid";

const userSchema = new Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  fullName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: email,
    required: true,
  },
  password: {
    type: password,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
