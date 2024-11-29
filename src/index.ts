import express, { NextFunction, Request, Response } from 'express';
import userRouter from './routes/users';

const app = express();

const PORT = 3000;

app.use('/api/users', userRouter);

app.listen(PORT, () => {
    console.log(`Running on Port ${PORT}`);
});