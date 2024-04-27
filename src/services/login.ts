import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import UserModel from '../database/models/user.model';

const secret: string = process.env.JWT_SECRET || 'secret';

const sessionToken = (username: string, password: string):
string => jwt.sign({ username, password }, secret, { expiresIn: '120s' });

const login = async (username: string, password: string): Promise<string> => {
  if (!username || !password) { 
    throw new Error('"username" and "password" are required');
  }

  const loggedUser = await UserModel.findOne({ where: { username } });

  if (!loggedUser || !bcrypt.compareSync(password, loggedUser.dataValues.password)) {
    throw new Error('Username or password invalid');
  }
  return sessionToken(username, password);
};

export default { login };