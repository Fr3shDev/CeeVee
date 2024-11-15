import express from 'express';
import userRouter from './routes/users';

export function createApp() {
    const app = express();
    app.use(express.json());

    app.use('/api/users', userRouter);

    return app;
}