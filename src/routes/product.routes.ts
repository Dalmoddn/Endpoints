import express from 'express';
import productsController from '../controller/products';
import middleware from '../middleware/middleware';

const productsRouter = express.Router();

productsRouter.get('/products', productsController.findProducts);
productsRouter.use(middleware.middlewareName);
productsRouter.use(middleware.middlewareUserId);
productsRouter.use(middleware.middlewarePrice);
productsRouter.post('/products', productsController.insertItem);

export default productsRouter;