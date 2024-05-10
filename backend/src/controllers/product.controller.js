import { asyncHandler } from "../utils/asyncHandler.js";
import { Product } from "../models/product.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const getAllProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  res.status(200).json(new ApiResponse(200, products));
});

const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    throw new ApiError(404, "Product not found");
  }
  res.status(200).json(new ApiResponse(200, product));
});

const createProduct = asyncHandler(async (req, res) => {
  const images = req.files.images.map((file) => file.path);
  const imageUrls = await uploadOnCloudinary(images);
  const product = await Product.create({ ...req.body, imageUrl: imageUrls });
  res.status(201).json(new ApiResponse(201, product));
});

const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    throw new ApiError(404, "Product not found");
  }
  const images = req.files.images.map((file) => file.path);
  const imageUrls = await uploadOnCloudinary(images);
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    { ...req.body, imageUrl: imageUrls },
    { new: true }
  );
  res.status(200).json(new ApiResponse(200, updatedProduct));
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    throw new ApiError(404, "Product not found");
  }
  await Product.findByIdAndDelete(req.params.id);
  res.status(204).json(new ApiResponse(204));
});

export {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
