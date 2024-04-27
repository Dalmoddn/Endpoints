import { Request, Response } from 'express';
import loginServices from '../services/login';

const login = async (req: Request, res: Response): Promise<Response | undefined> => {
  try {
    const { username, password } = req.body;
    const token = await loginServices.login(username, password);
    return res.status(200).json({ token });
  } catch (error) {
    if (!(error instanceof Error)) return;
    const HTTPCode = error.message === 'Username or password invalid' ? 401 : 400;
    return res.status(HTTPCode).json({ message: error.message });
  }
};

export default { login };