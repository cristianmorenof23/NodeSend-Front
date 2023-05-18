import React, { useContext, useEffect } from 'react';
import Layout from '../../components/Layout';
import Dropzone from '../../components/Dropzone';
import authContext from '../../context/auth/authContext';
import appContext from '../../context/app/appContext';
import Link from 'next/link';
import Alerta from '../../components/Alerta';



const index = () => {

    // Extraer el usuario autenticado del storage
    const AuthContext = useContext(authContext)
    const { usuarioAutenticadoToken } = AuthContext

    // Extraer el mensaje de error de archivos
    const AppContext = useContext(appContext)
    const { mensaje_archivo, url } = AppContext

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            usuarioAutenticadoToken()
        }
        
    }, [])

    return (
        <Layout>
            <div className='md:w-4/5 xl:w-3/5 mx-auto mb-32'>
                {url ? (
                    <>
                        <p className='text-center text-4xl'><span className='font-bold text-red-600 text-4xl uppercase  mb-10'>Tu Url es:</span> {`${process.env.frontendURL}/enlaces/${url}`}</p>
                        <button
                            type='button'
                            className='bg-red-500 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold cursor-pointer mt-10'
                            onClick={() => navigator.clipboard.writeText(`${process.env.frontendURL}/enlaces/${url}`)}
                        >Copiar Enlace</button>
                    </>
                ) : (

                    <>
                        {mensaje_archivo && <Alerta />}

                        <div className='lg:flex md:shadow-lg p-5 bg-white rounded-lg py-10'>
                            <Dropzone />
                            <div className='md:flex-1 mb-3 mx-2 mt-16 lg_mt-0'>
                                <h2 className='text-4xl font-sans font-bold text-gray-800 my-4'>Compartir archivos de forma sencilla y privada</h2>
                                <p className='text-lg leading-loose'>
                                    <span className='text-red-500 font-bold'>ReactNodeSend</span> te permite compartir archivos con cifrado extremo de extremo a extremo y un archivo que es eliminado despues de ser descargado. Asi que puedes mantener lo que compartes en privado y asegurarte de que tus cosas no permanezan en linea para siempre.
                                </p>
                                <Link className='text-red-500 font-bold text-lg hover:text-red-700' href='/crear-cuenta'>
                                    Crear una cuenta para mayores beneficios
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </Layout>
    )
}

export default index