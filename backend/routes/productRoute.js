import express from 'express';
import { getAllProducts, createProduct, updateProduct, deleteProduct, getSingleProduct } from '../controllers/productController.js';


const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/product/new").post(createProduct);

router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getSingleProduct);

export default router;