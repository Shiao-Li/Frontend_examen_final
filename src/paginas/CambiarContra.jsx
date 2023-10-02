import React from 'react'
import Password from '../componets/Perfil/Password'

const CambiarContra = () => {
    return (
        <div>
            <h1 className='font-black text-4xl text-gray-500'>Password</h1>
            <hr className='my-4' />
            <p className='mb-8'>Este módulo te permite actualizar el password del usuario</p>
            <Password />
        </div>
    )
}

export default CambiarContra