import express from 'express';
import productsRouter from './routes/product.routes';
import usersRouter from './routes/user.routes';
import loginRouter from './routes/login.routes';

const app = express();

app.use(express.json());
app.use(usersRouter);
app.use(loginRouter);
app.use(productsRouter);

export default app;
