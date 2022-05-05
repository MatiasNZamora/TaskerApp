import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

const schema = yup.object().shape({
    password: yup
    .string("Las contraseñas deben ser un texto")
    .required("Debes ingresar una contraseña")
    .min(6, "La contraseña debe tener al menos 6 caracteres")
})

export default yupResolver(schema);