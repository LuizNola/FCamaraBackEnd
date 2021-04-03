//arquivo para iniciar o servidor

import express, { Request, Response, NextFunction, response } from 'express'
import routes from './routes';
const cors = require('cors');
import AppError from './errors/apperror'

const app = express();
import './database'

//Lendo os dados recebidos em JSON
app.use(express.json());
app.use(cors());
//Lendo o arquivo de rotas
app.use(routes);

app.use((err: Error, req:Request, res:Response, next:NextFunction) => {
    if(err instanceof AppError) {
        return res.status(err.statusCode).json({
            status: 'error',
            message: err.message
        })
    }

    console.error(err)
    return res.status(500).json({ 
        status: 'error',
        message: 'Erro interno do servidor'
    })
})

app.listen(5000, ()=> {
    console.log('Server Started!');
});