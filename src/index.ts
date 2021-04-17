import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import './repositories/index';
import routes from './routes';
import { errorHandler } from './handlers/errorHandler';

const app = express();

app.use(express.json());

app.use(cors());

app.use(routes);

app.use(errorHandler);
const PORT = process.env.PORT || 3400;
app.listen(PORT, () => {
  console.log('App Connected');
});
