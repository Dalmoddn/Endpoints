import ProductModel, { ProductSequelizeModel } from '../database/models/product.model';
import { Product } from '../types/Product';

const getLastId = async (): Promise<number> => {
  const lastId = await ProductModel.findAll();
  return lastId.length + 1;
};

const insertItem = async (product: Product):
Promise<{ id: number, name: string, price: string, userId: number }> => {
  await ProductModel.create(product);
  const incommingProductId = await getLastId();
  return {
    id: incommingProductId,
    name: product.name,
    price: product.price,
    userId: product.userId,
  };
};

const findProducts = async (): Promise<Product[]> => {
  const findProduct = await ProductModel.findAll();
  const res: Product[] = findProduct.map((item: ProductSequelizeModel) => item.dataValues);
  return res;
};

export default { insertItem, getLastId, findProducts };