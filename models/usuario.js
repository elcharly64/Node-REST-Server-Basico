

//const {Schema,model} = require('mongoose');
import mongoose from "mongoose";
const {Schema, model, models} = mongoose;

const UsuarioSchema = Schema({
    nombre : {
        type: String,
        required: [true,'El nombre es obligatorio']
    },
    correo : {
        type: String,
        required: [true,'El correo es obligatorio'],
        unique: true
    },
    password : {
        type: String,
        required: [true,'La contraseña es obligatoria']
    },
    img : {
        type: String,
    },
    rol : {
        type: String,
        required: [true,'El rol es obligatorio'],
        enum: ['ADMIN_ROLE','USER_ROLE']
    },
    estado : {
        type: Boolean,
        default: true
    },
    google : {
        type: Boolean,
        default: false
    }

});

UsuarioSchema.methods.toJSON = function(){
    const {__v, password,... usurrio} = this.toObject();
    return usurrio;
}
//export default models?.Usuario;
export default model('Usuario',UsuarioSchema);

