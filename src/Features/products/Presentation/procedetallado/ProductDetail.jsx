import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Slider from "react-slick";
import { FaCheckCircle, FaTruck, FaShareAlt } from 'react-icons/fa';
import ryzen5600 from '../../../../assets/Procesador/ryzen5600.jpg';
import ryzen56002 from '../../../../assets/Procesador/ryzen56002.png';
import ryzen56003 from '../../../../assets/Procesador/ryzen56003.png';
import ryzen58003 from '../../../../assets/Procesador/ryzen85003.png';
import ryzen58002 from '../../../../assets/Procesador/ryzen85002.png';
import ryzen58001 from '../../../../assets/Procesador/ryzen85001.png';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { 
  FacebookShareButton, 
  TwitterShareButton, 
  WhatsappShareButton, 
  FacebookIcon, 
  TwitterIcon, 
  WhatsappIcon 
} from "react-share";

const ProductDetail = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "AMD Ryzen 5 5600GT - Combo de Actualización",
      priceCurrent: "308,300",
      priceBefore: "311,400",
      description: "Eleva el rendimiento de tu sistema con el procesador AMD Ryzen 5 5600GT, diseñado para entusiastas de los juegos y creadores de contenido. Disfruta de una velocidad excepcional y una multitarea sin esfuerzo.",
      specs: [
        { key: "Tipo", value: "pcie" },
        { key: "Chipset", value: "RX 6650 XT" },
        { key: "Soporte SLI", value: "-" },
        { key: "Ray Tracing", value: "Sí" },
        { key: "Ancho", value: "131 mm" },
        { key: "Largo", value: "241 mm" },
        { key: "Espesor", value: "2.0 slots" },
        { key: "VGA", value: "0" },
        { key: "DVI", value: "0" },
        { key: "HDMI", value: "1" },
        { key: "Puertos Display", value: "3" },
        { key: "USB Tipo-C", value: "0" },
        { key: "Consumo", value: "170 W" },
        { key: "Recomendación PSU", value: "500 W" }
      ],
      availability: "En stock y listo para envío.",
      images: [
        ryzen5600,
        ryzen56002,
        ryzen56003
      ]
    },
    {
      id: 2,
      name: "AMD Ryzen 7 5800GT - Combo de Actualización",
      priceCurrent: "456,900",
      priceBefore: "467,200",
      description: "El procesador AMD Ryzen 7 5800GT es perfecto para usuarios avanzados que buscan una experiencia de juego fluida y un rendimiento óptimo en tareas multitarea intensivas.",
      specs: [
        { key: "Tipo", value: "pcie" },
        { key: "Chipset", value: "RX 6650 XT" },
        { key: "Soporte SLI", value: "-" },
        { key: "Ray Tracing", value: "Sí" },
        { key: "Ancho", value: "131 mm" },
        { key: "Largo", value: "241 mm" },
        { key: "Espesor", value: "2.0 slots" },
        { key: "VGA", value: "0" },
        { key: "DVI", value: "0" },
        { key: "HDMI", value: "1" },
        { key: "Puertos Display", value: "3" },
        { key: "USB Tipo-C", value: "0" },
        { key: "Consumo", value: "170 W" },
        { key: "Recomendación PSU", value: "500 W" }
      ],
      availability: "Stock limitado. Envío en 3-5 días.",
      images: [
        ryzen58001,
        ryzen58002,
        ryzen58003
      ]
    }
  ];

  const product = products.find((prod) => prod.id === parseInt(id));

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <div style={{ fontSize: '40px', color: '#333' }}>&#10095;</div>,
    prevArrow: <div style={{ fontSize: '40px', color: '#333' }}>&#10094;</div>,
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const productUrl = `https://bushidotech.com/product/${id}`;

  return product ? (
    <div className="max-w-5xl mx-auto my-10 p-8 bg-gray-50 rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row items-start md:items-center">
        <div className="w-full md:w-1/2">
          <Slider {...settings} className="mb-6">
            {product.images.map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  className="w-full h-auto rounded-lg object-contain border border-gray-200 shadow-md"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="w-full md:w-1/2 md:pl-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">{product.description}</p>

          <div className="mb-6">
            <span className="text-4xl font-bold text-orange-600">${product.priceCurrent}</span>
            <span className="text-xl text-gray-400 line-through ml-4">${product.priceBefore}</span>
          </div>

          <div className="space-y-3">
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              <span className="text-gray-700 font-semibold">Garantía - 12 meses</span>
              <Link to="/terms-conditions" className="text-blue-500 ml-2 underline">Ver términos y condiciones</Link>
            </div>
            <div className="flex items-center">
              <FaCheckCircle className="text-green-500 mr-2" />
              <span className="text-gray-700 font-semibold">Stock disponible</span>
            </div>
            <div className="flex items-center">
              <FaTruck className="text-green-500 mr-2" />
              <span className="text-gray-700 font-semibold">Envíos a todo el país</span>
            </div>
          </div>

          <div className="flex space-x-4 mt-8">
            <button
              onClick={openModal}
              className="flex items-center bg-gray-800 text-white text-lg px-6 py-3 rounded-lg hover:bg-gray-900 transition duration-300 ease-in-out shadow-lg"
            >
              <FaShareAlt className="mr-2" /> Compartir
            </button>
            <button className="w-full md:w-auto bg-orange-600 text-white text-lg px-8 py-4 rounded-lg hover:bg-orange-700 transition duration-300 ease-in-out shadow-lg">
              Sumar al Carrito
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Descripción Detallada</h3>
        <div className="grid grid-cols-2 gap-8 border-b-2 pb-6 mb-6">
          <div>
            <h4 className="font-semibold text-lg text-gray-700">General</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              {product.specs.slice(0, 4).map((spec, index) => (
                <li key={index}>{spec.key}: {spec.value}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-gray-700">Conectividad</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              {product.specs.slice(7, 11).map((spec, index) => (
                <li key={index}>{spec.key}: {spec.value}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-gray-700">Consumo y PSU</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              {product.specs.slice(11).map((spec, index) => (
                <li key={index}>{spec.key}: {spec.value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-lg relative shadow-lg">
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Compartir este producto</h2>
            <p className="text-gray-700 mb-6">Puedes compartir el siguiente enlace:</p>
            <input
              type="text"
              value={productUrl}
              readOnly
              className="border rounded-lg w-full p-2 text-gray-800 mb-4"
            />
            <button 
              onClick={() => {
                navigator.clipboard.writeText(productUrl);
                alert('Enlace copiado al portapapeles!');
              }} 
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition duration-300 ease-in-out mb-4"
            >
              Copiar enlace
            </button>
            
            <div className="my-4 border-t pt-4">
              <h3 className="font-semibold text-lg">Resumen del Producto</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
            
            <h3 className="font-semibold text-lg">Comparte en:</h3>
            <div className="flex space-x-4 mt-2">
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${productUrl}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <FaFacebook size={24} /> 
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${productUrl}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                <FaTwitter size={24} /> 
              </a>
              <a href={`https://wa.me/?text=${productUrl}`} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700">
              <FaWhatsapp size={24} /> 
              </a>
            </div>
            
            <button onClick={closeModal} className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-300 ease-in-out mt-4">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  ) : (
    <p className="text-center text-gray-700">Producto no encontrado.</p>
  );
};

export default ProductDetail;
