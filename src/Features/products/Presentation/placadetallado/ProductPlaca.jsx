import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Slider from "react-slick";
import { FaCheckCircle, FaTruck, FaShareAlt, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa'; 
import placa30601 from '../../../../assets/Placavideo/placa30601.png';
import placa30602 from '../../../../assets/Placavideo/placa30602.png';
import placa30603 from '../../../../assets/Placavideo/placa30603.png';
import placa30701 from '../../../../assets/Placavideo/placa30701.png';
import placa30702 from '../../../../assets/Placavideo/placa30702.png';
import placa30703 from '../../../../assets/Placavideo/placa30703.png';

const ProductPlaca = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "NVIDIA GeForce RTX 3060 - Tarjeta Gráfica",
      priceCurrent: "450,000",
      priceBefore: "475,000",
      description: "Experimenta el poder de la nueva generación con la NVIDIA GeForce RTX 3060. Ideal para jugadores y creadores de contenido que buscan un rendimiento excepcional y soporte para las últimas tecnologías como el Ray Tracing y DLSS.",
      specs: [
        { key: "Memoria", value: "12 GB GDDR6" },
        { key: "CUDA Cores", value: "3584" },
        { key: "Frecuencia Base", value: "1.32 GHz" },
        { key: "Frecuencia Máxima", value: "1.78 GHz" },
        { key: "Consumo Energético (TDP)", value: "170 W" },
        { key: "Conectores de Video", value: "HDMI 2.1, 3x DisplayPort 1.4a" },
        { key: "Fuente Recomendada", value: "550W o superior" },
        { key: "Dimensiones", value: "242 mm x 112 mm x 40 mm" },
        { key: "Tecnologías Soportadas", value: "Ray Tracing, DLSS, DirectX 12 Ultimate" },
      ],
      details: {
        general: {
          type: "Tarjeta Gráfica",
          chipset: "GeForce RTX 3060",
          sliSupport: "No",
          specialFeatures: "Ray Tracing, DLSS, NVIDIA G-Sync",
        },
        connectivity: {
          vga: "No",
          dvi: "No",
          hdmi: "1x HDMI 2.1",
          displayPorts: "3x DisplayPort 1.4a",
          usbTypeC: "No",
        },
        dimensions: {
          width: "112 mm",
          length: "242 mm",
          thickness: "40 mm",
        },
        energy: {
          powerConsumption: "170 W",
          recommendedPower: "550 W",
        }
      },
      availability: "En stock y listo para envío.",
      images: [placa30601, placa30602, placa30603],
    },
    {
      id: 2,
      name: "NVIDIA GeForce RTX 3070 - Tarjeta Gráfica",
      priceCurrent: "600,000",
      priceBefore: "650,000",
      description: "Desata el poder del rendimiento con la NVIDIA GeForce RTX 3070. Diseñada para jugadores y creadores de contenido, esta tarjeta gráfica ofrece gráficos impresionantes, Ray Tracing en tiempo real, y soporte para DLSS, elevando tu experiencia a un nuevo nivel.",
      specs: [
        { key: "Memoria", value: "8 GB GDDR6" },
        { key: "CUDA Cores", value: "5888" },
        { key: "Frecuencia Base", value: "1.50 GHz" },
        { key: "Frecuencia Máxima", value: "1.73 GHz" },
        { key: "Consumo Energético (TDP)", value: "220 W" },
        { key: "Conectores de Video", value: "HDMI 2.1, 3x DisplayPort 1.4a" },
        { key: "Fuente Recomendada", value: "650W o superior" },
        { key: "Dimensiones", value: "242 mm x 112 mm x 40 mm" },
        { key: "Tecnologías Soportadas", value: "Ray Tracing, DLSS, DirectX 12 Ultimate" },
      ],
      details: {
        general: {
          type: "Tarjeta Gráfica",
          chipset: "GeForce RTX 3070",
          sliSupport: "No",
          specialFeatures: "Ray Tracing, DLSS, NVIDIA G-Sync",
        },
        connectivity: {
          vga: "No",
          dvi: "No",
          hdmi: "1x HDMI 2.1",
          displayPorts: "3x DisplayPort 1.4a",
          usbTypeC: "No",
        },
        dimensions: {
          width: "112 mm",
          length: "242 mm",
          thickness: "40 mm",
        },
        energy: {
          powerConsumption: "220 W",
          recommendedPower: "650 W",
        }
      },
      availability: "En stock y listo para envío.",
      images: [placa30701, placa30702, placa30703],
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
        {/* Carrusel de imágenes */}
        <div className="w-full md:w-1/2">
          <Slider {...settings} className="mb-6">
            {product.images.map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image}
                  alt={`Imagen del producto ${index + 1}`}
                  className="w-full h-auto rounded-lg object-contain border border-gray-200 shadow-md"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Información del producto */}
        <div className="w-full md:w-1/2 md:pl-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">{product.description}</p>
          
          {/* Precios */}
          <div className="mb-6">
            <span className="text-4xl font-bold text-orange-600">${product.priceCurrent}</span>
            <span className="text-xl text-gray-400 line-through ml-4">${product.priceBefore}</span>
          </div>

          {/* Opciones Verdes */}
          <div className="space-y-3 mb-6">
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

          <p className="text-green-600 font-semibold mb-4">{product.availability}</p>

          {/* Botones compartir y sumar al carrito */}
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

          {/* Botón de compra */}
          {/* <p className="text-green-600 font-semibold mb-4">{product.availability}</p>
          <button className="w-full md:w-auto bg-orange-600 text-white text-lg px-8 py-4 rounded-lg hover:bg-orange-700 transition duration-300 ease-in-out shadow-lg">
            Comprar Ahora
          </button> */}
        </div> 
      </div> 

      {/* Detalles producto */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Descripción Detallada</h3>
        <div className="grid grid-cols-2 gap-8 border-b-2 pb-6 mb-6">
          <div>
            <h4 className="font-semibold text-lg text-gray-700">General</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>Tipo: {product.details.general.type}</li>
              <li>Chipset: {product.details.general.chipset}</li>
              <li>Soporte SLI: {product.details.general.sliSupport}</li>
              <li>Características especiales: {product.details.general.specialFeatures}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-gray-700">Conectividad</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>VGA: {product.details.connectivity.vga}</li>
              <li>DVI: {product.details.connectivity.dvi}</li>
              <li>HDMI: {product.details.connectivity.hdmi}</li>
              <li>Puertos Display: {product.details.connectivity.displayPorts}</li>
              <li>USB Tipo-C: {product.details.connectivity.usbTypeC}</li>
            </ul>
          </div>
        </div>

        {/* Más detalles */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-lg text-gray-700">Dimensiones</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>Ancho: {product.details.dimensions.width}</li>
              <li>Longitud: {product.details.dimensions.length}</li>
              <li>Grosor: {product.details.dimensions.thickness}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-gray-700">Energía</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>Consumo de energía: {product.details.energy.powerConsumption}</li>
              <li>Poder recomendado: {product.details.energy.recommendedPower}</li>
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

export default ProductPlaca;
