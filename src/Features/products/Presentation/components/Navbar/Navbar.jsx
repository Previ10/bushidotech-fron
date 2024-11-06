import { useState } from "react";
import Logo from "../../../../../assets/LogoBus.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { FaCaretDown, FaBars } from "react-icons/fa";
import { DarkMode } from "./DarkMode";
import { PopupInitSession } from "../Popup/PopupInitSession";
import { Popup } from "../Popup/Popup";
import { Link } from "react-router-dom";
import { PopupRegisterSucess } from "../Popup/PopupRegisterSucess";
import { RegisterPopup } from "../Popup/RegisterPopup";
import { useAuthenticationStorage } from "../../../../user/data/local/user_local_data_sources";
import {UserProfileModal } from '../Navbar/UserProfileModal';


const Menu = [
  { id: 1, name: "Inicio", link: "/dashboard" },
  { id: 2, name: "Procesadores", link: "/procesadores" },
  { id: 3, name: "Placas de Video", link: "/placadevideo" },
  { id: 4, name: "Motherboards", link: "/motherboards" },
  { id: 5, name: "Periféricos", link: "/perifericos" },
];

const DropdownLinks = [
  { id: 1, name: "Cooler", link: "/cooler" },
  { id: 2, name: "Discos duros HDD", link: "/#discos-durosHDD" },
  { id: 3, name: "Discos Solidos SSD", link: "/#discos-solidosSSD" },
  { id: 4, name: "Fuentes", link: "/#fuentes" },
  { id: 5, name: "Gabinetes", link: "/#gabinetes" },
  { id: 6, name: "Memorias RAM", link: "/#memorias-RAM" },
];

export const Navbar = () => {
  const [showInitSessionModal, setShowInitSessionModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [orderPopup, setOrderPopup] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showUserProfileModal, setShowUserProfileModal] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  const handleShowModal = () => {
    setShowInitSessionModal(true);
  };

  const { DeleteUserSession, user, token } = useAuthenticationStorage();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogOut = () => {
    DeleteUserSession();
  }


  return (

    <div className="shadow-md bg-orange-500 dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Navbar Superior */}
      <div className="bg-primary/40 py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="w-48 mr-3" />
            {/* Botón para abrir el menú en pantallas pequeñas */}
            <button
              className="sm:hidden text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <FaBars size={24} />
            </button>
          </div>

          {/* Barra de Búsqueda */}
          <div className="flex items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Buscar"
                className="w-[200px] sm:w-[300px] group-hover:w-[350px] transition-all duration-300 rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* Botón de Orden */}
            <button
              onClick={handleOrderPopup}
              className="hidden sm:flex bg-gradient-to-r from-orange-500 to-orange-700 transition-all duration-200 text-white py-2 px-4 rounded-md items-center gap-2 group hover:from-orange-600 hover:to-orange-800 transform hover:scale-105"
            >
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
              <span className="hidden sm:block group-hover:inline-block">Ordenar</span>
            </button>

            {/* Cambio de Modo Oscuro */}
            <DarkMode />

            {/* Botón de Iniciar Sesión */}
            {

              user && token ?
                <>

                  <div className="relative flex items-center md:order-2 space-x-3 md:space-x-3 rtl:space-x-reverse">
                    
                    {/* Nombre de user logueado */}
                    {/* <button
                      type="button"
                      className="flex text-sm rounded-full md:me-0  items-center gap-1.5 "
                      id="user-menu-button"
                      aria-expanded={isMenuOpen}
                      onClick={toggleMenu}
                    >
                      <p className="hover:underline">
                        {
                          user.name + ' ' + user.lastname
                        }
                      </p>
                      <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-user-round w-8 h-8"><path d="M18 20a6 6 0 0 0-12 0"/><circle cx="12" cy="10" r="4"/><circle cx="12" cy="12" r="10"/></svg>
                    </button> */}

                   {/* Botón MI PERFIL */}
                    <button
                      className="bg-white text-black border border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 transition-all duration-200 py-2 px-4 rounded-md flex items-center gap-2 group hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 transform hover:scale-105 ml-4"
                      onClick={() => setShowUserProfileModal(true)}
                    >
                      <FaUser className="text-xl dark:text-white text-black drop-shadow-sm cursor-pointer" />
                      <span className="hidden sm:block group-hover:inline-block">
                        {user.name + " " + user.lastname}
                      </span>
                    </button>



                    {/* Menu Dropdown */}
                    {isMenuOpen && (
                      <div
                        className="absolute right-0 z-50 mt-2  bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                        id="user-dropdown"
                        style={{ top: '100%', right: 0 }} 
                      >
                        <div className="px-4 py-3">
                          <span className="block text-sm text-gray-900 dark:text-white">
                            {user.name + " " + user.lastname}
                          </span>
                          <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                            {user.email}
                          </span>
                        </div>
                        <ul className="py-2" aria-labelledby="user-menu-button">
                          <li>
                            <button
                              onClick={handleLogOut}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white w-full"
                            >
                              Cerrar Sesion
                              
                            </button>
                          </li>
                        </ul>
                      </div>
                    )}

                    {/* Responsive Menu Button */}
                    <button
                      data-collapse-toggle="navbar-user"
                      type="button"
                      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      aria-controls="navbar-user"
                      aria-expanded={isMenuOpen}
                      onClick={toggleMenu}
                    >
                      <span className="sr-only">Open main menu</span>
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 1h15M1 7h15M1 13h15"
                        />
                      </svg>
                    </button>
                  </div>

                </>

                :
                <button
                  className="bg-gradient-to-r from-orange-500 to-orange-700 transition-all duration-200 text-white py-2 px-4 rounded-md flex items-center gap-2 group hover:from-orange-600 hover:to-orange-800 transform hover:scale-105"
                  onClick={handleShowModal}
                >
                  <FaUser className="text-xl text-white drop-shadow-sm cursor-pointer" />
                  <span className="hidden sm:block group-hover:inline-block">Iniciar sesión</span>
                </button>
            }

          </div>
        </div>
      </div>

      {/* Navbar Inferior */}
      <div className={`bg-primary/30 py-2 ${menuOpen ? "block" : "hidden"} sm:block`}>
        <div className="container mx-auto flex flex-col sm:flex-row justify-center">
          <ul className="flex flex-col sm:flex-row items-center gap-6">
            {Menu.map((data) => (
              <li key={data.id}>
                <Link
                  to={data.link}
                  className="text-white dark:text-gray-200 px-4 py-2 hover:text-orange-300 transition duration-200"
                >
                  {data.name}
                </Link>
              </li>
            ))}
            {/* Dropdown Simple y Links */}
            <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center gap-[2px] py-2 text-white dark:text-gray-200 hover:text-orange-300 transition duration-200">
                Más
                <FaCaretDown className="ml-1 transition duration-200 group-hover:rotate-180" />
              </a>
              <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 z-50 hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-lg">
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="block w-full rounded-md p-2 hover:bg-orange-200 transition duration-200"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
          <UserProfileModal 
      showModal={showUserProfileModal} 
      setShowModal={setShowUserProfileModal} 
      user={user}
      handleLogOut={handleLogOut}
    />

      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
      <PopupInitSession showModal={showInitSessionModal} setShowModal={setShowInitSessionModal} setShowRegisterModal={setShowRegisterModal} />
      <RegisterPopup showModal={showRegisterModal} setShowModal={setShowRegisterModal} />
    </div>
  );
};
