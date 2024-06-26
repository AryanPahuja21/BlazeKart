import { asyncHandler } from "../utils/asyncHandler.js";
import { Product } from "../models/product.model.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const getAllProducts = asyncHandler(async (req, res) => {
  let { page, limit, sort, maxPrice = 1000000, category = "all" } = req.query;
  let skip = (page - 1) * limit;

  if (!sort) {
    sort = {};
  } else if (sort === "latest") {
    sort = { createdAt: -1 };
  } else if (sort === "lowToHigh") {
    sort = { price: 1 };
  } else if (sort === "highToLow") {
    sort = { price: -1 };
  } else if (sort === "alphabetically") {
    sort = { name: 1 };
  }

  if (category === "all") {
    const totalCount = await Product.countDocuments({
      price: { $lte: maxPrice },
    });

    const products = await Product.find({ price: { $lte: maxPrice } })
      .sort(sort)
      .skip(Number(skip))
      .limit(Number(limit));
    res.status(200).json(new ApiResponse(200, products, totalCount));
  } else {
    if (category === "electronics") category = "Electronics";
    else if (category === "homeAppliances") category = "Home Appliances";
    else if (category === "clothing") category = "Clothing";
    else if (category === "footwear") category = "Footwear";
    else if (category === "kids") category = "Kids";
    else if (category === "accessories") category = "Accessories";

    const totalCount = await Product.countDocuments({
      category,
      price: { $lte: maxPrice },
    });

    const products = await Product.find({
      category,
      price: { $lte: maxPrice },
    })
      .sort(sort)
      .skip(Number(skip))
      .limit(Number(limit));
    res.status(200).json(new ApiResponse(200, products, totalCount));
  }
});

const getLatestProducts = asyncHandler(async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 }).limit(15);
  if (!products) {
    throw new ApiError(404, "No products found");
  }
  res.status(200).json(new ApiResponse(200, products));
});

const getProductByCategory = asyncHandler(async (req, res) => {
  const products = await Product.find({ category: req.params.category });
  if (!products) {
    throw new ApiError(404, "No products found");
  }
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
  const productImageLocalPath = req.files?.imageUrl[0].path;

  if (!productImageLocalPath) {
    throw new ApiError(400, "Product image is required");
  }

  const productImage = await uploadOnCloudinary(productImageLocalPath);

  if (!productImage) {
    throw new ApiError(500, "Failed to upload product image");
  }

  const product = await Product.create({
    ...req.body,
    imageUrl: productImage.url,
  });

  if (!product) {
    throw new ApiError(500, "Failed to create product");
  }

  res
    .status(201)
    .json(new ApiResponse(201, product, "Product created successfully"));
});

const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    throw new ApiError(404, "Product not found");
  }
  const productImageLocalPath = req.files?.imageUrl[0].path;
  const productImage = await uploadOnCloudinary(productImageLocalPath);
  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    { ...req.body, imageUrl: productImage.url },
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
  getLatestProducts,
  getProductByCategory,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
