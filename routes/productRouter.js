import express from 'express';
import { addProduct, deleteProdust, getProducts, updateProduct } from '../controllers/productController.js';


const productRouter = express.Router();

productRouter.post("/",addProduct)
productRouter.get("/",getProducts)
productRouter.put("/",updateProduct)
productRouter.delete("/:key",deleteProdust)


export default productRouter;