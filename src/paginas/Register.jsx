import { Link } from "react-router-dom";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import Mensaje from "../componets/Alertas/Mensaje";
import RegisterImage from '/public/images/register.svg';

export const Register = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [mensaje, setMensaje] = useState({});

    const onSubmit = async (data) => {
        const trimmedData = Object.keys(data).reduce((acc, key) => {
            acc[key] = typeof data[key] === 'string' ? data[key].trim() : data[key];
            return acc;
        }, {});
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/registro`;
            const respuesta = await axios.post(url, trimmedData);
            setMensaje({ respuesta: respuesta.data.msg, tipo: true });
            setTimeout(() => {
                setMensaje({});
            }, 3000);
        } catch (error) {
            setMensaje({ respuesta: error.response.data.msg, tipo: false });
        }
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 h-screen  items-center place-items-center">
                <div className="w-full max-w-md space-y-8  p-10 rounded-lg">
                    {Object.keys(mensaje).length > 0 && (
                        <Mensaje tipo={mensaje.tipo}>{mensaje.respuesta}</Mensaje>
                    )}
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                        Register your account
                    </h2>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>

                        <div className="flex gap-4">
                            <Controller
                                name="nombre"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: 'Este campo es obligatorio',
                                    pattern: {
                                        value: /^[A-Za-z\s]+$/,
                                        message: 'Ingresa solo letras en este campo',
                                    },
                                }}
                                render={({ field }) => (
                                    <div className="mb-3">
                                        <input
                                            {...field}
                                            type="text"
                                            placeholder="Nombre"
                                            maxLength={40}
                                            className={`block w-full rounded-md border ${errors.nombre ? 'border-red-500' : 'border-gray-300'
                                                } focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500`}
                                            required
                                        />
                                        {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre.message}</p>}
                                    </div>
                                )}
                            />
                            <Controller
                                name="apellido"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Este campo es obligatorio",
                                    pattern: {
                                        value: /^[A-Za-z\s]+$/,
                                        message: 'Ingresa solo letras en este campo',
                                    },
                                }}
                                render={({ field }) => (
                                    <div className="mb-3">
                                        <input
                                            {...field}
                                            type="text"
                                            placeholder="Apellido"
                                            maxLength={40}
                                            className={`block w-full rounded-md border ${errors.apellido ? "border-red-500" : "border-gray-300"
                                                } focus:border-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-700 py-1 px-1.5 text-gray-500`}
                                            required
                                        />
                                        {errors.apellido && (
                                            <p className="text-red-500 text-sm">{errors.apellido.message}</p>
                                        )}
                                    </div>
                                )}
                            />
                        </div>
                        <div className="mb-3">
                            <Controller
                                name="email"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Este campo es obligatorio",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                        message: "Formato de correo electrónico inválido",
                                    },
                                    maxLength: {
                                        value: 60,
                                        message: "El email debe tener un máximo de 60 caracteres",
                                    },
                                }}
                                render={({ field }) => (
                                    <div className="mb-3">
                                        <input
                                            {...field}
                                            type="email"
                                            placeholder="Introduce tu correo electrónico"
                                            maxLength={60}
                                            className={`block w-full rounded-md border ${errors.email ? "border-red-500" : "border-gray-300"
                                                } focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500`}
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                                        )}
                                    </div>
                                )}
                            />
                        </div>

                        <div className="mb-3">
                            <Controller
                                name="password"
                                control={control}
                                defaultValue=""
                                rules={{
                                    required: "Este campo es obligatorio",
                                    maxLength: {
                                        value: 60,
                                        message: "La contraseña debe tener un máximo de 60 caracteres",
                                    },
                                }}
                                render={({ field }) => (
                                    <div className="mb-3">
                                        <input
                                            {...field}
                                            type="password"
                                            placeholder="********************"
                                            className={`block w-full rounded-md border ${errors.password ? "border-red-500" : "border-gray-300"
                                                } focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-2 text-gray-500`}
                                            required
                                        />
                                        {errors.password && (
                                            <p className="text-red-500 text-sm">
                                                {errors.password.message}
                                            </p>
                                        )}
                                    </div>
                                )}
                            />
                        </div>

                        <div className="mb-3">
                            <button className="bgroup relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Registrate
                            </button>
                        </div>
                    </form>

                    <div className="mt-3 text-sm flex justify-between items-center">
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or{" "}
                            <span
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Already Have an Account, Please
                                <Link to="/login"> Signin now </Link>
                            </span>
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="mr-auto">
                        <img
                            src={RegisterImage}
                            alt=""
                            className="w-4/5 h-auto"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};
