import { useEffect, useState } from "react";
import Logo from "../../../../../assets/LogoBus.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping, FaUser } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { FaCaretDown, FaBars } from "react-icons/fa";
import { DarkMode } from "./DarkMode";
import { PopupInitSession } from "../Popup/PopupInitSession";
import { Popup } from "../Popup/Popup";
import { Link, useNavigate } from "react-router-dom";
import { PopupRegisterSucess } from "../Popup/PopupRegisterSucess";
import { RegisterPopup } from "../Popup/RegisterPopup";
import { useAuthenticationStorage } from "../../../../user/data/local/user_local_data_sources";
import { UserProfileModal } from '../Navbar/UserProfileModal';

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon
} from "react-share";
import { FaCheckCircle, FaTruck, FaShareAlt } from 'react-icons/fa';
import { useProductLocalStorage } from "../../data/local/products_local_data_sources";
import { useGetProductQueryHook } from "../../hooks/use_get_product_query_hook";

export const Navbar = () => {
  const navigate = useNavigate();
  const { shoppingCart, cleanShoppingCart } = useProductLocalStorage();
  
  const [searchInput, setSearchInput] = useState(""); 
    const [shouldFetch, setShouldFetch] = useState(false); 


  const { data: products, error, loading, refetch } = useGetProductQueryHook({
    searchInput: shouldFetch ? searchInput : "",
  });

  useEffect(() => {
    if (shouldFetch) {
      refetch();
      setShouldFetch(false); 
    }
  }, [shouldFetch, refetch]);

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value); 
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && searchInput.trim()) {
      navigate(`/buscar?query=${encodeURIComponent(searchInput.trim())}`);
      setShouldFetch(true);
    }
  };

  console.log(shoppingCart)
  const Menu = [
    { id: 1, name: "Inicio", link: "/dashboard" },
    { id: 2, name: "Procesadores", link: "/procesadores" },
    { id: 3, name: "Placas de Video", link: "/placadevideo" },
    { id: 4, name: "Motherboards", link: "/motherboards" },
    { id: 5, name: "Periféricos", link: "/perifericos" },

  ];

  const DropdownLinks = [
    { id: 1, name: "Crear producto", link: "/create-product", showifAdmin: true },
    { id: 2, name: "Cooler", link: "/cooler", showifAdmin: false },
    { id: 3, name: "Discos duros HDD", link: "/discos-durosHDD", showifAdmin: false },
    { id: 4, name: "Discos Solidos SSD", link: "/discos-solidosSSD", showifAdmin: false },
    { id: 5, name: "Fuentes", link: "/fuentes", showifAdmin: false },
    { id: 6, name: "Gabinetes", link: "/gabinetes", showifAdmin: false },
    { id: 7, name: "Memorias RAM", link: "/memorias-RAM", showifAdmin: false },

  ];

  const shareUrl = "https://bushido-tech.netlify.app/";
  const shareMessage = "¡Recomendamos este increíble sitio web de tecnología! Encuentra los mejores componentes de PC a precios competitivos. Garantía de calidad y servicio al cliente excepcional. ¡Te esperamos!";
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          
          <div className="flex items-center gap-4">

          {/* Botón de Favoritos */}
          {/* <button
            className="bg-gradient-to-r from-orange-500 to-orange-700 transition-all duration-200 text-white py-2 px-4 rounded-md flex items-center gap-2 group hover:from-orange-600 hover:to-orange-800 transform hover:scale-105"
          >
            <FaHeart className="text-xl text-white drop-shadow-sm cursor-pointer" />
            <span className="hidden sm:block group-hover:inline-block">Favoritos</span>
          </button> */}

            {/* Botón compartir */}
            <div className="flex space-x-4 mt-0.8">
              <button
                onClick={openModal}
                className="hidden sm:flex bg-gradient-to-r from-orange-500 to-orange-700 transition-all duration-200 text-white py-2 px-4 rounded-md items-center gap-2 group hover:from-orange-600 hover:to-orange-800 transform hover:scale-105"
              >
                <FaShareAlt className="mr-2" /> Compartir
              </button>
            </div>

            {/* Barra de Búsqueda */}
            <div className="relative group hidden sm:block">
              <input
 value={searchInput}
 onChange={handleSearchChange}
 onKeyDown={handleKeyDown}
                type="text"
                placeholder="Buscar"
                maxLength={30}
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
              <span className="hidden sm:block group-hover:inline-block">{`Ordenar(${shoppingCart.length})`
              }</span>
            </button>

            {/* Cambio de Modo Oscuro */}
            <DarkMode />

            {/* Botón de Iniciar Sesión */}
            {

              user && token ?
                <>
                  <div className="relative flex items-center md:order-2 space-x-3 md:space-x-3 rtl:space-x-reverse">

                    {/* Botón MI PERFIL */}
                    <button
                      className="flex items-center gap-2 px-4 py-2 rounded-md text-white bg-orange-500 border border-orange-500 
                       hover:bg-orange-600 hover:scale-105 transition-transform duration-200
                         dark:bg-orange-400 dark:hover:bg-orange-500"
                      onClick={() => setShowUserProfileModal(true)}
                    >
                      <FaUser className="text-xl" />
                      <span className="hidden sm:inline-block group-hover:inline-block">
                        {user.name} {user.lastname}
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
                  {DropdownLinks.map((data) => {

                    if (data.showifAdmin && !user?.rol?.includes("admin")) {
                      return
                    }
                    return (<li key={data.id}>
                      <a
                        href={data.link}
                        className="block w-full rounded-md p-2 hover:bg-orange-200 transition duration-200"
                      >
                        {data.name}
                      </a>
                    </li>)
                  })}
                </ul>
              </div>
            </li>

            {isModalOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-11/12 max-w-lg relative shadow-lg">
                  <button onClick={closeModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-3xl dark:text-white dark:hover:text-gray-300">
                    &times;
                  </button>
                  <h2 className="text-xl font-bold mb-4 flex items-center">Compartir BushidoTech <FaShareAlt className="ml-2" /> </h2>
                  <p className="text-gray-700 dark:text-white mb-6">Encuentra los mejores componentes de PC a precios competitivos. Garantía de calidad y servicio al cliente excepcional.</p>

                  <div>
                    {/* Texto explicativo */}
                    <h3 className="font-semibold text-lg dark:text-white">Selecciona tu red social:</h3>

                    {/* Botones para compartir en redes sociales */}
                    <li className="flex items-center gap-2 mt-2">
                      <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80"
                      >
                        <FacebookIcon size={32} round={true} />
                      </a>
                      <a
                        href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80"
                      >
                        <TwitterIcon size={32} round={true} />
                      </a>
                      <a
                        href={`https://wa.me/?text=${shareMessage}%20${shareUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:opacity-80"
                      >
                        <WhatsappIcon size={32} round={true} />
                      </a>
                    </li>
                  </div>

                </div>
              </div>
            )}
          </ul>
        </div>
      </div>

      <UserProfileModal
        showModal={showUserProfileModal}
        setShowModal={setShowUserProfileModal}
        user={user}
        handleLogOut={handleLogOut}
      />

      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} shoppingCart={shoppingCart} cleanShoppingCart={cleanShoppingCart}    user={user}     />
      <PopupInitSession showModal={showInitSessionModal} setShowModal={setShowInitSessionModal} setShowRegisterModal={setShowRegisterModal} />
      <RegisterPopup showModal={showRegisterModal} setShowModal={setShowRegisterModal} />
    </div>
  );
};
