import Role from '../models/rol.js';
import Usuario from '../models/usuario.js';

const esRolValido = async (rol = '')=>{
    
        const rolExiste = await Role.findOne({rol});
        if(!rolExiste) throw new Error(`El rol ${rol} no puede ser asignado`)
}


const correoExiste = async (correo)=>{
    console.log(`no la olvidare ${correo}`);
    const existeCorreo = await Usuario.findOne({correo});
    if(existeCorreo){
        throw new Error(`El correo ${correo} ya existe, ok`);
    }
}

const usuarioExistePorId = async (id)=>{
    const existeUsuario = await Usuario.findById(id);
    if(!existeUsuario){
        throw new Error(`El id ${id} no pertenece a ningun usuario`);
    }
}
export {
    esRolValido,
    correoExiste,
    usuarioExistePorId
};





