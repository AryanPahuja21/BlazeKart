import { Router } from "express";

import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProduct,
  updateProduct,
} from "../controllers/product.controller.js";

import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router
  .route("/")
  .get(getAllProducts)
  .post(
    upload.fields({
      name: "images",
      maxCount: 10,
    }),
    createProduct
  );

router
  .route("/:id")
  .get(getProduct)
  .put(
    upload.fields({
      name: "images",
      maxCount: 10,
    }),
    updateProduct
  )
  .delete(deleteProduct);

export default router;
