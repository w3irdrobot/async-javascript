import express from 'express';
import bodyParser from 'body-parser';
import { resolve } from 'path';
import helmet from 'helmet';
import jsonServer from 'json-server';

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api', jsonServer.router(resolve(__dirname, 'db.json')));
app.use(express.static(resolve(__dirname, 'public')));

export default app;
