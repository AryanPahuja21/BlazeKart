import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Order } from "../models/order.model.js";
import { User } from "../models/user.model.js";
import { reduceStock } from "../utils/featuers.js";

const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.status(200).json(new ApiResponse(200, orders));
});

const getOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    throw new ApiError(404, "Order not found");
  }
  res.status(200).json(new ApiResponse(200, order));
});

const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).sort({
    createdAt: -1,
  });
  res.status(200).json(new ApiResponse(200, orders));
});

const createOrder = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingInfo,
    subtotal,
    shippingCharges,
    tax,
    discount,
    total,
  } = req.body;
  const user = await User.findById(req.user._id);
  if (!user) {
    throw new ApiError(404, "User not found");
  }
  const order = await Order.create({
    user,
    orderItems,
    shippingInfo,
    subtotal,
    shippingCharges,
    tax,
    discount,
    total,
  });
  if (!order) {
    throw new ApiError(500, "Failed to create order");
  }

  await reduceStock(orderItems);
  1;
  res
    .status(201)
    .json(new ApiResponse(201, order, "Order created successfully"));
});

const updateOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    throw new ApiError(404, "Order not found");
  }
  const { status } = req.body;
  order.status = status;
  await order.save();
  res
    .status(200)
    .json(new ApiResponse(200, order, "Order updated successfully"));
});

const deleteOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    throw new ApiError(404, "Order not found");
  }
  await order.remove();
  res.status(200).json(new ApiResponse(200, {}, "Order deleted successfully"));
});

export {
  getAllOrders,
  getOrder,
  getMyOrders,
  createOrder,
  updateOrder,
  deleteOrder,
};
