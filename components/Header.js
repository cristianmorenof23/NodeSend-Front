import React, { useContext, useEffect } from 'react'
import Link from 'next/link'
import authContext from '../context/auth/authContext'
import appContext from '../context/app/appContext'
import {useRouter} from 'next/router'

const Header = () => {

    // routing
    const router = useRouter()

    // Extraer el usuario autenticado del storage
    const AuthContext = useContext(authContext)
    const { usuarioAutenticadoToken, usuario, cerrarSesion } = AuthContext

    // context de la aplicacion
    const AppContext = useContext(appContext)
    const { limpiarState } = AppContext

    useEffect(() => {
        usuarioAutenticadoToken()
    }, [])

    const redireccionar = () => {
        router.push('/')
        limpiarState()
    }

    return (
        <header className='py-8 flex flex-col md:flex-row items-center justify-around'>

            <img
                onClick={() => redireccionar()}
                className='w-64 mb-8 md:mb-0 text-focus-in cursor-pointer' src='/logo.svg' />



            <div>
                {
                    usuario ? (
                        <div className='flex justify-around items-center'>
                            <p className='mr-2 font-bold text-xl'>Hola {usuario.nombre}</p>
                            <button type='button' className='bg-red-500  hover:bg-gray-900 px-5 py-3 rounded-lg uppercase text-white font-bold mr-2' onClick={() => cerrarSesion()}>Cerrar Sesion</button>
                        </div>
                    ) : (
                        <>
                            <Link href='/login' className='bg-red-500  hover:bg-gray-900 px-5 py-3 rounded-lg uppercase text-white font-bold mr-2'>
                                Iniciar Sesión
                            </Link>

                            <Link href='/crear-cuenta' className='bg-black hover:bg-red-500 px-5 py-3 rounded-lg uppercase text-white font-bold'>
                                Crear Cuenta
                            </Link>
                        </>
                    )
                }

            </div>
        </header>
    )
}

export default Header