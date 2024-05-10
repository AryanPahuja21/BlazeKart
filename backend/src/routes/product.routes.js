import { Router } from "express";

import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getLatestProducts,
  getProduct,
  updateProduct,
} from "../controllers/product.controller.js";

import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router
  .route("/")
  .get(getLatestProducts)
  .post(
    upload.fields([
      {
        name: "imageUrl",
        maxCount: 1,
      },
    ]),
    createProduct
  );

router.route("/all").get(getAllProducts);

router
  .route("/:id")
  .get(getProduct)
  .put(
    upload.fields([
      {
        name: "imageUrl",
        maxCount: 10,
      },
    ]),
    updateProduct
  )
  .delete(deleteProduct);

export default router;
