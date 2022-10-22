import { Router } from "express";
import {check} from 'express-validator';
import { validarCampos } from "../middlewares/validar-campos.js";

const router = Router();
import {
    usuariosGet,
    usuariosDelete,
    usuariosPut,
    usuariosPost
} from '../controllers/usuarios.js';
import { correoExiste, esRolValido, usuarioExistePorId } from "../helpers/db-validators.js";

router.get('/', usuariosGet);
router.post('/',
[
    check('nombre','El nombre es olbigatorio').not().isEmpty(),
    check('password','La contraseña debe tener por lo menos 6 caracteres').isLength({min:6}),
    check('correo','El correo no es valido').isEmail(),
    check('correo').custom(correoExiste),
    check('rol').custom(esRolValido),
//esta es la version completa    check('rol').custom((rol)=>esRolValido(rol)),
    validarCampos
],usuariosPost);
router.put('/:id',[
    check('id','La id no es valida').isMongoId(),
    check('id').custom(usuarioExistePorId),
    check('rol').custom(esRolValido),
    validarCampos
    ],
    usuariosPut);

router.delete('/:id',[
    check('id','La id no es valida').isMongoId(),
    check('id').custom(usuarioExistePorId),
    validarCampos
    ],
    usuariosDelete);

export {
    router
};