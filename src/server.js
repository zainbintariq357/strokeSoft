import express from 'express';
import DB  from './DbConnection/dbConnect';
import cors from 'cors';
import status from 'http-status';
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import compression from 'compression';
import Router from './Routes';

const app = express();
const API_PORT = 3001;

DB();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(compression());

app.get('/', (_,res)=>{
  res.status(status.OK).send({Message : 'It can be connected successfyully', status: status.OK })
})
// append /api for our http requests
// app.use('/api', Router.dataRouter);
app.use('/api', Router.productRouter)
// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));