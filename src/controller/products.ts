import { Request, Response } from 'express';
import { Product } from '../types/Product';
import productsServices from '../services/products';

const insertItem = async (req: Request, res: Response): Promise<Response> => {
  try {
    const product: Product = req.body;
    const newProduct = await productsServices.insertItem(product);
    return res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: 'Não foi possível adicionar o produto.' });
  }
};

const findProducts = async (_req: Request, res: Response): Promise<Response> => {
  const resp = await productsServices.findProducts();
  return res.status(200).json(resp);
};

export default { insertItem, findProducts };