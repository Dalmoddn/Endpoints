import { Request, Response, NextFunction } from 'express';
import ProductModel from '../database/models/product.model';

const middlewareName = (req: Request, res: Response, next: NextFunction): void | Response => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  if (name.length < 3) {
    return res.status(422).json({ message: '"name" length must be at least 3 characters long' });
  }
  if (typeof name !== 'string') {
    return res.status(422).json({ message: '"name" must be a string' });
  }
  next();
};

const middlewarePrice = (req: Request, res: Response, next: NextFunction): void | Response => {
  const { price } = req.body;
  if (!price) {
    return res.status(400).json({ message: '"price" is required' });
  }
  if (price.length < 3) {
    return res.status(422).json({ message: '"price" length must be at least 3 characters long' });
  }
  if (typeof price !== 'string') {
    return res.status(422).json({ message: '"price" must be a string' });
  }
  next();
};

const middlewareUserId = async (req: Request, res: Response, next: NextFunction):
Promise<void | Response> => {
  const { userId } = req.body;
  if (!userId) {
    return res.status(400).json({ message: '"userId" is required' });
  }
  if (typeof userId !== 'number') {
    return res.status(422).json({ message: '"userId" must be a number' });
  }
  const findOneQuery = await ProductModel.findOne({ where: { userId } });
  const user = findOneQuery?.dataValues.userId;
  if (user !== userId) {  
    return res.status(422).json({ message: '"userId" not found' });
  }
  next();
};

export default { middlewareName, middlewarePrice, middlewareUserId };