import express from 'express';
import usersController from '../controller/user';

const usersRouter = express.Router();

usersRouter.use(express.json());
usersRouter.get('/users', usersController.getUsersBuy);

export default usersRouter;