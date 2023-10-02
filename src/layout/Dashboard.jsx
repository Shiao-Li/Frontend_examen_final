import { useContext, useState } from 'react'
import { Link, Navigate, Outlet, useLocation } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'
import { FaDiceOne, FaDiceTwo, FaDiceThree, FaChevronLeft, FaChevronRight } from 'react-icons/fa';


const Dashboard = () => {
    const location = useLocation()
    const urlActual = location.pathname
    const { auth } = useContext(AuthContext)
    const autenticado = localStorage.getItem('token')

    const [menuVisible, setMenuVisible] = useState(false);
    const [sidebarWide, setSidebarWide] = useState(true);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const toggleSidebarWidth = () => {
        setSidebarWide(!sidebarWide);
    };

    return (
        <div className='md:flex md:min-h-screen'>
            <div className={`md:w-1/5 bg-gray-800 px-5 py-4 rounded-lg mt-5 mb-5 ml-5 ${sidebarWide ? 'md:w-1/4' : 'md:w-1/12'}`}>
                <div className="flex justify-between items-center">
                    {sidebarWide && (<h2 className='text-4xl font-black text-center text-slate-200'>Asistencia técnica automotriz </h2>)}
                    <button onClick={toggleSidebarWidth} className="text-white mt-4 p-2 bg-gray-700 hover:bg-gray-900 rounded-md">
                        {sidebarWide ? <FaChevronLeft /> : <FaChevronRight />}
                    </button>
                </div>
                <hr className="mt-5 border-slate-500" />
                <ul className={`mt-5 ${sidebarWide ? 'block' : 'hidden md:block'}`}>
                    <li className="text-center">
                        <Link
                            to='/dashboard/Gestion1'
                            className={`${urlActual === '/dashboard/Gestion1' ? 'text-slate-200 bg-gray-900 px-3 py-2 rounded-md text-center' : 'text-slate-600'} text-xl block mt-2 hover:text-slate-600`}
                        >
                            {sidebarWide ? 'Técnicos' : <FaDiceOne />}
                        </Link>
                    </li>
                    <li className="text-center">
                        <Link
                            to='/dashboard/Gestion2'
                            className={`${urlActual === '/dashboard/Gestion2' ? 'text-slate-100 bg-gray-900 px-3 py-2 rounded-md text-center' : 'text-slate-600'} text-xl block mt-2 hover:text-slate-600`}
                        >
                            {sidebarWide ? 'Clientes' : <FaDiceTwo />}
                        </Link>
                    </li>
                    <li className="text-center">
                        <Link
                            to='/dashboard/Gestion3'
                            className={`${urlActual === '/dashboard/Gestion3' ? 'text-slate-100 bg-gray-900 px-3 py-2 rounded-md text-center' : 'text-slate-600'} text-xl block mt-2 hover:text-slate-600`}
                        >
                            {sidebarWide ? 'Tickets' : <FaDiceThree />}
                        </Link>
                    </li>
                </ul>

            </div>
            <div className='flex-1 flex flex-col h-screen bg-gray-100'>
                <div className='py-2 flex md:justify-end items-center justify-between gap-2 px-4'>
                    <div className='text-md font-semibold text-black'>
                        Bienvenido - {auth?.nombre}
                    </div>
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/1144/1144760.png" alt="img-client" className="border-2 rounded-full" width={50} height={50} />
                    </div>
                    <div className="relative inline-block text-left">
                        <button onClick={toggleMenu} className="text-white block hover:bg-slate-600 bg-slate-900 px-4 py-1 rounded-lg items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transform transition-transform ${menuVisible ? 'rotate-180' : 'rotate-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {menuVisible && (
                            <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                    <Link to="/dashboard/perfil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Editar perfil</Link>
                                    <Link to="/dashboard/CambiarContra" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Cambiar contraseña</Link>
                                    <Link to="/" onClick={() => { localStorage.removeItem('token'); toggleMenu(); }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">Salir</Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='overflow-y-scroll p-8'>
                    {autenticado ? <Outlet /> : <Navigate to="/login" />}
                </div>
            </div>
        </div>
    );
}

export default Dashboard