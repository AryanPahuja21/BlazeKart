import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },
  price: {
    type: Number,
    required: [true, "Please enter product price"],
  },
  description: {
    type: String,
    required: [true, "Please enter product description"],
  },
  imageUrl: {
    type: String,
    required: [true, "Please upload product image"],
  },
  category: {
    type: String,
    required: [true, "Please enter product category"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter product count in stock"],
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

export const Product = mongoose.model("Product", productSchema);
