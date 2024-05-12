import { Product } from "../models/product.model.js";

export const reduceStock = async (orderItems) => {
  for (let i = 0; i < orderItems.length; i++) {
    const order = orderItems[i];
    const product = await Product.findById(order.productId);
    product.stock = product.stock - order.quantity;
    await product.save();
  }
};
