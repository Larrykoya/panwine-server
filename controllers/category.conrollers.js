import Category from "../models/category.model";

export async function createCategory(req, res) {
  try {
    const newCategoty = await Category.create(req.body);
    res.status(200).json({
      message: "category created",
      category: newCategoty,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "unable to craete",
    });
  }
}

export async function fetchCategoty(req, res) {
  try {
    const allCategory = await Category.find({});
    res.status(200).json({
      message: "categories fetched successfully",
      categories: allCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "unable to fetch categories",
    });
  }
}

export async function fetchCategortyById(req, res) {
  try {
    let singleCategory = await Category.findById(req.params.id);
    res.status(200).json({
      message: "category fetched successfully",
      category: singleCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "unable to fetch" });
  }
}

export async function updateCategpry(req, res) {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json({
      message: "category updated",
      category: updateCategpry,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "unable to update",
    });
  }
}

export async function deleteCategory(req, res) {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(204).json({
      message: "delete successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "unable to delete",
    });
  }
}
