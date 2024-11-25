import express, { Request, Response } from 'express';
const app = express();
import cors from 'cors';
import userRouter from './modules/user/user.router';
import tourRouter from './modules/tour/tour.route';

// parser
app.use(express.json());
app.use(cors());

app.use('/api/user', userRouter);
app.use('/api/tour', tourRouter);

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'server live ',
  });
});

export default app;
