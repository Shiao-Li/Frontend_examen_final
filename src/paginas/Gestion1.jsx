import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Tabla from '../componets/componets1/Tabla'

const Gestion1 = () => {
    const location = useLocation()
    const urlActual = location.pathname
    return (
        <div>
            <h1 className='font-black text-4xl text-gray-500'>Gestion modulo 1</h1>
            <hr className='my-4' />
            <p className='mb-8'>En este módulo podras gestionar el modulo 1</p>
            <Link to='/dashboard/Crear1' className={`${urlActual === '/dashboard/Gestion1' ? 'text-slate-100 bg-gray-900 px-3 py-2 rounded-md text-center' : 'text-slate-600'} text-xl block mt-2 hover:text-slate-600`}>Agregar</Link>
            <hr className='my-4' />
            <Tabla />
        </div>
    )
}

export default Gestion1