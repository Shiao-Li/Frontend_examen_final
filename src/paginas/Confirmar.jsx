import logoDog from '../assets/dog-hand.webp'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Mensaje from '../componets/Alertas/Mensaje';

export const Confirmar = () => {
    const { token } = useParams();
    const [mensaje, setMensaje] = useState({})
    const verifyToken = async () => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/confirmar/${token}`
            const respuesta = await axios.get(url)
            setMensaje({ respuesta: respuesta.data.msg, tipo: true })
        } catch (error) {
            setMensaje({ respuesta: error.response.data.msg, tipo: false })
        }
    }
    useEffect(() => {
        verifyToken()
    }, [])

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {/* Mueve el mensaje del backend aquí */}
            <div className="my-6">
                {Object.keys(mensaje).length > 0 && <Mensaje tipo={mensaje.tipo}>{mensaje.respuesta}</Mensaje>}
            </div>
            <div class="flex items-center justify-center">
                <div class="p-1 rounded shadow-lg bg-gradient-to-r from-purple-500 via-green-500 to-blue-500">
                    <div class="flex flex-col items-center p-4 space-y-2 bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h1 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Gracias!</h1>
                        <p>¡Gracias por confirmar tu cuenta! el siguiente paso es iniciar sesión</p>
                        <a
                            class="inline-flex items-center px-4 py-2 text-white bg-indigo-600 border border-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring">
                            <span class="text-sm font-medium">
                                <Link to="/login" >
                                    Ir al inicio de sesión
                                </Link>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}


