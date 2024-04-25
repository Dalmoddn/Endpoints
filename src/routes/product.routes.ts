import express from 'express';
import productsController from '../controller/products';

const productsRouter = express.Router();

productsRouter.get('/products', productsController.findProducts);
productsRouter.post('/products', productsController.insertItem);

export default productsRouter;