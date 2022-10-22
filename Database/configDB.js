

import mongoose from "mongoose";


const conectarDB = async ()=>{
    try {
        mongoose.connect(process.env.MONGO_CNN);
        console.log(`Conectado con Base de Datos`);
    } catch (error) {
        console.log(`Error al conectarse a BD`);
        console.log(error);
    }
};


export {conectarDB};