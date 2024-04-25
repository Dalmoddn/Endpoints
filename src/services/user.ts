import ProductModel from '../database/models/product.model';
import UserModel from '../database/models/user.model';
import { UserBuy } from '../types/User';

const getUsersServices = async (): Promise<UserBuy[]> => {
  const getUsers = await UserModel.findAll();
  const getProducts = await ProductModel.findAll();

  const resp = getUsers.map((user) => {
    const userProducts = getProducts
      .filter((product) => product
        .dataValues.userId === user.dataValues.id)
      .map((product) => product.dataValues.id);
    return {
      username: user.dataValues.username,
      productIds: userProducts,
    };
  });
  return resp;
};

export default { getUsersServices };