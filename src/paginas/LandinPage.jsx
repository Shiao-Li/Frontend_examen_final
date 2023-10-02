import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSun, FaMoon } from 'react-icons/fa';
import img1 from '../assets/car1.jpg'
import img2 from '../assets/car2.jpg'


export const LandinPage = () => {
    const [darkMode, setdarkMode] = useState(false)
    return (
        <div className={darkMode ? "dark" : ""}>
            <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800'>
                <header >
                    <nav className='p-10 mb-12 flex justify-between items-center'>
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img width="64" height="64" src="https://img.icons8.com/external-others-phat-plus/64/external-automotive-motor-car-color-line-others-phat-plus-5.png" alt="external-automotive-motor-car-color-line-others-phat-plus-5" />
                        </a>
                        <div className='flex items-center'>
                            <div className="flex items-center mr-4">
                                <button
                                    onClick={() => setdarkMode(!darkMode)}
                                    className={`cursor-pointer ${darkMode ? 'text-white' : 'text-black'}`}
                                >
                                    {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
                                </button>
                            </div>
                            <div>
                                <Link
                                    to="/login"
                                    className={`text-sm font-semibold leading-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}
                                >
                                    <span className={`text-lg font-bold ${darkMode ? 'text-white' : ''}`}>Iniciar sesión</span>
                                    <span
                                        aria-hidden="true"
                                        className={`ml-1 ${darkMode ? 'text-white' : 'text-gray-900'}`} // 
                                        style={{ fontWeight: 'bold', fontSize: '1.2em' }}
                                    >
                                        →
                                    </span>
                                </Link>
                            </div>
                        </div>

                    </nav>
                </header>
                <section className="bg-white dark:bg-gray-900">
                    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            <h1 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">Estamos listos para darle a tu vehículo todo lo que necesites</h1>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <img className="w-full rounded-lg" src={img1} alt="office content 1" />
                            <img className="mt-4 w-full rounded-lg lg:mt-10" src={img2} alt="office content 2" />
                        </div>
                    </div>
                </section>
                <section className="bg-gray-50 dark:bg-gray-800">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                        <div className="mb-8 max-w-screen-md lg:mb-16">
                            <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">Podrás gestionar</h2>
                        </div>
                        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                            <div>
                                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                    <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                                </div>
                                <h3 className="mb-2 text-xl font-bold dark:text-white">Técnicos</h3>
                                <p className="text-gray-500 dark:text-gray-400">El usuario en el sistema web podrá crear, visualizar, actualizar los datos y eliminar técnicos. </p>
                            </div>
                            <div>
                                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                    <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                                </div>
                                <h3 className="mb-2 text-xl font-bold dark:text-white">Tickets</h3>
                                <p className="text-gray-500 dark:text-gray-400">El usuario en el sistema web podrá crear, visualizar, actualizar los datos y eliminar Tickets.</p>
                            </div>
                            <div>
                                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                    <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                                </div>
                                <h3 className="mb-2 text-xl font-bold dark:text-white">Clientes</h3>
                                <p className="text-gray-500 dark:text-gray-400">El usuario en el sistema web podrá crear, visualizar, actualizar los datos y eliminar clientes</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <a href="#" className="mb-4 md:mb-0 -m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img width="64" height="64" src="https://img.icons8.com/external-others-phat-plus/64/external-automotive-motor-car-color-line-others-phat-plus-5.png" alt="external-automotive-motor-car-color-line-others-phat-plus-5" />
                        </a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6">Acerca de</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6">Política de privacidad</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                        © 2023 <a href="https://flowbite.com/" className="hover:underline"></a>. Todos los derechos reservados a SOFTWARO
                    </span>
                </div>
            </footer>
        </div>
    )
}