import { Router } from "express";

import {
  createOrder,
  deleteOrder,
  getAllOrders,
  getOrder,
  getMyOrders,
  updateOrder,
} from "../controllers/order.controller.js";

import { admin, verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router
  .route("/")
  .get(verifyJWT, admin, getAllOrders)
  .post(verifyJWT, createOrder);

router
  .route("/:id")
  .get(verifyJWT, getOrder)
  .put(verifyJWT, admin, updateOrder)
  .delete(verifyJWT, admin, deleteOrder);

router.route("/my-orders").get(verifyJWT, getMyOrders);

export default router;
