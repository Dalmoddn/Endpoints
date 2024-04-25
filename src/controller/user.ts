import { Request, Response } from 'express';
import usersServices from '../services/user';

const getUsersBuy = async (req: Request, res: Response): Promise<Response> => {
  try {
    const resp = await usersServices.getUsersServices();
    return res.status(200).json(resp);
  } catch (error) {
    return res.status(500).json({ message: 'Não foi possível listar os usuários.' });
  }
};

export default { getUsersBuy };