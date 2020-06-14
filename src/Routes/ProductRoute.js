import express from 'express';
import product from '../controllers/ProductController';

const productRouter = express.Router();

productRouter.post('/addProduct', product.addNewProduct);

productRouter.get('/getProducts', product.getAllProducts);

export default productRouter;
