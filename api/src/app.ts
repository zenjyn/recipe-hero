import express, { Request, Response } from 'express';

import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());
app.use(morgan('dev'));

export default app;
