import React, { useContext } from 'react';
import authContext from '../context/auth/authContext';
import appContext from '../context/app/appContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


const Alerta = () => {

    // Extraer mensajes de error para usuarios
    const AuthContext = useContext(authContext)
    const { mensaje } = AuthContext

    // Extraer el mensaje de error de archivos
    const AppContext = useContext(appContext)
    const {mensjae_archivo} = AppContext

    toast(mensaje || mensjae_archivo)

    return (
        <ToastContainer
            autoClose = {2500}
            closeOnClick
        />
    )
}

export default Alerta