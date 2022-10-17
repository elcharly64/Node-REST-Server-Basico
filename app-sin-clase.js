
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT;

app.get('/',(req,resp)=>{
    resp.send(`Hola Mundo Fiel`);
});

app.listen(port,()=>console.log(`Escuchando puerto ${ port }`));



