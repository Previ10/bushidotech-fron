import React, { useState } from "react";
import footerLogo from "../../../../../assets/logopopup.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import Modal from "react-modal";
import { MapContainer, TileLayer, Marker, Popup as MapPopup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

Modal.setAppElement("#root");

const FooterLinks = [
  { title: "Inicio", link: "/#" },
  { title: "Nosotros", link: "/#nosotros" },
  { title: "Contacto", link: "/#contacto" },
  { title: "Blog", link: "/#blog" },
];

export const Footer = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  const openMapModal = () => setIsMapOpen(true);
  const closeMapModal = () => setIsMapOpen(false);

  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto py-10 px-5">
        <div className="grid md:grid-cols-3 gap-10 pb-10">
          {/* Detalles de la empresa */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-3 mb-3">
                <img src={footerLogo} alt="Logo" className="max-w-[50px]" />
                BushidoTech
              </h1>
              <p className="text-gray-400">
                Encuentra los mejores componentes de PC a precios competitivos. Garantía de calidad y servicio al cliente excepcional.
              </p>
            </div>
            <div>
              <h1 className="text-xl font-bold mb-3">Contactos</h1>
              <div className="flex items-center gap-3 mb-2">
                <FaLocationArrow />
                <p>
                  Argentina, CBA{" "}
                  <button
                    className="ml-2 text-primary underline hover:text-white transition duration-300"
                    onClick={openMapModal}
                  >
                    Ver mapa
                  </button>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaMobileAlt />
                <p>+52 123456789</p>
              </div>
            </div>
          </div>

          {/* Enlaces del Footer */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-xl font-bold mb-3">Enlaces Importantes</h1>
              <ul className="flex flex-col gap-3">
                {FooterLinks.map((link) => (
                  <li
                    className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-400"
                    key={link.title}
                  >
                    <a href={link.link}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enlaces sociales */}
          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-xl font-bold mb-3">Síguenos</h1>
              <div className="flex items-center gap-3">
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-primary transition duration-300" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl hover:text-primary transition duration-300" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl hover:text-primary transition duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Modal del Mapa */}
        <Modal
          isOpen={isMapOpen}
          onRequestClose={closeMapModal}
          className="bg-gray-800 rounded-lg p-6 mx-auto mt-10 max-w-3xl" 
          overlayClassName="bg-black bg-opacity-50 fixed inset-0 flex justify-center items-center"
        >
          <h2 className="text-white text-2xl mb-4 text-center">Ubicación de BushidoTech</h2>
          <MapContainer
            center={[-31.413369, -64.187578]} 
            zoom={13}
            style={{ height: "400px", width: "100%" }} 
            className="rounded-lg"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-31.413369, -64.187578]}>
              <MapPopup>Estamos aquí</MapPopup>
            </Marker>
          </MapContainer>
          <button
            onClick={closeMapModal}
            className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-white hover:text-primary transition w-full"
          >
            Cerrar
          </button>
        </Modal>

        <div className="text-center py-4 border-t border-gray-700 mt-10">
          <p className="text-gray-500">&copy; 2024 BushidoTech. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  );
};
