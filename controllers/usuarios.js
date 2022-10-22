
import express from 'express';
const { Response, Request } = express;
import bcryptjs from 'bcryptjs';
import Usuario from '../models/usuario.js';

const usuariosGet =async (req = Request,res = Response)=>{
    const {limite = 5, desde = 0} = req.query;
    const filtro = {estado: true};
    const [registros, usuarios] = await Promise.all([
        Usuario.countDocuments(filtro),
        Usuario.find(filtro)
            .limit(limite)
            .skip(desde)
    ]);
    // const usuarios = await Usuario.find(filtro)
    // .limit(limite)
    // .skip(desde);
    // const registros = await Usuario.countDocuments(filtro);
    const elementos = usuarios.length;
        res.json({
            elementos,
            registros,
            usuarios
    })
};

const usuariosPost = async (req = Request,res = Response)=>{
    const {nombre, password, correo, rol } = req.body;
    // const body = req.body;
    // const usuario = new Usuario(body);
    const usuario = new Usuario({nombre, password, correo, rol });


    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password,salt);

    await usuario.save();

    res.json({
        usuario
})
};

const usuariosPut = async (req = Request,res = Response)=>{
//    const id = req.params.id;
//forma alternativa.
    const {id} = req.params;
    const {password, google, correo, ...resto} = req.body;

    if(password){
        const salt = bcryptjs.genSaltSync();
        resto.password = bcryptjs.hashSync(password,salt);
    
    }
    // const usuario = new Usuario(resto);
    const editedUsuario = await Usuario.findByIdAndUpdate(id,resto,{returnDocument:'after'});
    res.json({
        msg: 'Datos modificados',
        id: id,
        editedUsuario
})
};

const usuariosDelete = async (req,res = Response)=>{
    const { id }= req.params;
    const usuario = await Usuario.findByIdAndUpdate(id, {estado: false});
//    const usuario = await Usuario.findByIdAndDelete(id);
//Lo anterior es para borrarlo fisicamente
    res.json({
        msg: `Usuario con id ${id} borrado!`,
        usuario
})
};

export {
    usuariosGet,
    usuariosDelete,
    usuariosPut,
    usuariosPost
};