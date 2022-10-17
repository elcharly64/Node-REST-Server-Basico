
import express from 'express';

import cors from 'cors';
import {router} from '../Routes/usuarios.js'

class Server{


    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.middlewares();
        this.urlUsuarios = '/api/usuarios';
        this.routes();

    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.static('public'));
        this.app.use(express.json());
    }

    routes(){

        this.app.use(this.urlUsuarios, router);
    }

    listen(){

        this.app.listen(this.port, ()=>{
            console.log(`Esuchando el puerto ${this.port}`);
        })

    }



}

export{Server};
