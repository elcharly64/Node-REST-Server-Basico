import { Router } from "express";
const router = Router();
import {
    usuariosGet,
    usuariosDelete,
    usuariosPut,
    usuariosPost
} from '../controllers/usuarios.js';

router.get('/', usuariosGet);
router.post('/',usuariosPost);
router.put('/:id',usuariosPut);
router.delete('/',usuariosDelete);

export {
    router
};