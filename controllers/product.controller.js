import Product from "../models/product.model";

export async function createProduct(req, res) {
  try {
    const newProduct = await Product.create(req.body);
    return res.status(201).json({
      message: "product created successfully",
      event: newProduct,
    });
  } catch (err) {
    console.log(err.messsage);
    return res.status(500).json({
      message: "issue processing your request",
    });
  }
}

export async function fetchProduct(req, res) {
  try {
    let products = await Product.find({});
    res.status(200).json({
      message: "fetch successful",
      products: products,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "unable to fetch",
    });
  }
}

export async function fetchProductById(req, res) {
  try {
    let singleProduct = await Product.findById(req.params.id);
    res.status(200).json({
      message: "product fetched",
      product: singleProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "unable to fetch product",
    });
  }
}

export async function updateProduct(req, res) {
  try {
    let updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json({
      message: "product updated",
      result: updatedProduct,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "error occured while updating",
    });
  }
}

export async function deleteProduct(req, res) {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(204).json({
      message: "product deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "unable to delete",
    });
  }
}
