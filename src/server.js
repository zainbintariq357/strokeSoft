import express from 'express';
import Connect  from './DbConnection/dbConnect';
import cors from 'cors';
import status from 'http-status';
import morgan from 'morgan';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import compression from 'compression';
import Router from './Routes';
import Model from './Models';
import multer from 'multer';
import path from 'path';
const app = express();
const API_PORT = 3001;
const router = express.Router();

Connect();

app.use(morgan('dev'));
app.use(cors());
app.use('/upload', express.static('upload'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(helmet());
app.use(compression());
app.use(express.static(path.join(__dirname, "./public/")));

app.use(router);

app.get('/', (_,res)=>{
  res.status(status.OK).send({Message : 'It can be connected successfyully', status: status.OK })
})
// append /api for our http requests
// app.use('/api', Router.dataRouter);
// app.use('/api', Router.ProductRoute);
// app.use('/api', Router.CategoryRoute);
app.use('/api', Router.imageRoute);
app.use('/api', Router.userRoute);
app.use('/api', Router.exerciseRoute);
app.use('/api', Router.user);
app.use('/api', Router.carRoute);
// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));