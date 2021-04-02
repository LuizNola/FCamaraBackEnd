//arquivo para iniciar o servidor

import express from 'express'; 
import routes from './routes';
const cors = require('cors');

const app = express();

import './database'

//Lendo os dados recebidos em JSON
app.use(express.json());
app.use(cors());
//Lendo o arquivo de rotas
app.use(routes);

app.listen(5000, ()=> {
    console.log('Server Started!');
});