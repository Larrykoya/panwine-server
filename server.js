import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {
  createProduct,
  updateProduct,
  fetchProduct,
  fetchProductById,
  deleteProduct,
} from "./controllers/product.controller";

dotenv.config();
const server = express();
const port = 8080;
const connectToDB = () => mongoose.connect(process.env.DEV_DB);
connectToDB()
  .then(() => console.log("connected to DB"))
  .catch((err) => {
    console.log(err);
  });

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/", (req, res) => {
  res.status(200).json({
    message: "up and running",
  });
});

server.get("/product", fetchProduct);
server.post("/product", createProduct);
server.get("/product/:id", fetchProductById);
server.put("/product/:id", updateProduct);
server.delete("/product/:id", deleteProduct);

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
