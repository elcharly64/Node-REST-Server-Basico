
import express from 'express';
const { Response, Request } = express;

const usuariosGet = (req = Request,res = Response)=>{
    const {id,nombre = 'No name',Band = 'Default band'} = req.query;//tienen que llamarse igual que en la URL
        res.json({
            msg: 'Get desde el condtolador',
            id,
            nombre,
            Band
    })
};

const usuariosPost = (req = Request,res = Response)=>{
    const {nombre,apellido,cedula} = req.body;
    res.json({
        msg: 'Post desde el condtolador',
        nombre,
        apellido,
        cedula
})
};

const usuariosPut = (req = Request,res = Response)=>{
//    const id = req.params.id;
//forma alternativa.
    const {id} = req.params;

    res.json({
        msg: 'Put desde el condtolador',
        id: id
})
};

const usuariosDelete = (req,res = Response)=>{
    res.json({
        msg: 'Delete desde el condtolador'
})
};

export {
    usuariosGet,
    usuariosDelete,
    usuariosPut,
    usuariosPost
};