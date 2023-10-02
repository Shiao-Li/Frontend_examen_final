import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import AuthContext from '../context/AuthProvider';
import axios from 'axios';
import Mensaje from '../componets/Alertas/Mensaje';
import signupImage from '../assets/signup.jpg';

const Login = () => {
    const navigate = useNavigate();
    const { setAuth, setEstado } = useContext(AuthContext);
    const [mensaje, setMensaje] = useState({});
    const { handleSubmit, control, formState: { errors } } = useForm();
    const [form, setform] = useState({
        email: "",
        password: ""
    });

    const [showPassword, setShowPassword] = useState(false);

    const onSubmit = async (data) => {
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/login`;
            const respuesta = await axios.post(url, data);
            localStorage.setItem('token', respuesta.data.token);
            setAuth(respuesta.data);
            navigate('/dashboard');
        } catch (error) {
            setMensaje({ respuesta: error.response.data.msg, tipo: false });
            setTimeout(() => {
                setMensaje({});
            }, 3000);
        }
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 h-screen items-center place-items-center">
                <div className="md:w-4/5 sm:w-full">
                    {Object.keys(mensaje).length > 0 && <Mensaje tipo={mensaje.tipo}>{mensaje.respuesta}</Mensaje>}
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Bienvenido
                    </h2>
                    <div className="mt-6 border-t border-gray-400"></div>

                    <small className="text-gray-400 block my-4 text-sm">Ingresa tu información</small>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="-space-y-px rounded-md shadow-sm">
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: 'Este campo es obligatorio',
                                    pattern: {
                                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: 'Formato de correo electrónico inválido'
                                    }
                                }}
                                render={({ field }) => (
                                    <div className="mb-1">
                                        <input
                                            {...field}
                                            type="email"
                                            placeholder="Correo electrónico"
                                            maxLength={122}
                                            className={`block w-full ${errors.email ? 'border border-red-500' : 'rounded-md border border-gray-300'} focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-2 px-3 text-gray-900 placeholder:text-gray-400`}
                                        />
                                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                                    </div>
                                )}
                            />
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                rules={{ required: 'Este campo es obligatorio' }}
                                render={({ field }) => (
                                    <div className="relative">
                                        <input
                                            {...field}
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Contraseña"
                                            className={`block w-full ${errors.password ? 'border border-red-500' : 'rounded-md border border-gray-300'} focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-2 px-3 text-gray-900 placeholder:text-gray-400`}
                                        />
                                        <button
                                            type="button"
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ?
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
                                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                                                </svg> :
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z" />
                                                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z" />
                                                </svg>}

                                        </button>
                                        {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                                    </div>
                                )}
                            />
                        </div>
                        <div className="my-4">
                            <button className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Iniciar sesión</button>
                        </div>
                    </form>

                    <div className="mt-5 text-xs border-b-2 py-4 ">
                        <div className="flex justify-end">
                            <Link to="/forgot/id" className="text-sm text-indigo-600 hover:text-indigo-500">Olvidaste tu contraseña?</Link>
                        </div>
                    </div>

                    <div className="mt-3 text-sm flex justify-between items-center">
                        <p className="mt-2 text-center text-sm text-gray-600">
                            O{" "}
                            <span
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                No tienes una cuenta, por favor{" "}
                                <Link to="/register"> - Regístrate ahora -</Link>
                            </span>
                        </p>

                    </div>
                </div>
                <div className="flex justify-center">
                    <img src={signupImage} alt="" />
                </div>
            </div>
        </>
    )
}

export default Login;
