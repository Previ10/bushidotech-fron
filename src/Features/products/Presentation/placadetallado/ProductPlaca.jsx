import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import placa30601 from '../../../../assets/Placavideo/placa30601.png';
import placa30602 from '../../../../assets/Placavideo/placa30602.png';
import placa30603 from '../../../../assets/Placavideo/placa30603.png';

// ID2..
import placa30701 from '../../../../assets/Placavideo/placa30701.png';
import placa30702 from '../../../../assets/Placavideo/placa30702.png';
import placa30703 from '../../../../assets/Placavideo/placa30703.png';

const ProductPlaca = () => {
  const { id } = useParams();

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
        { key: "TDP", value: "170 W" },
        { key: "Conectores de Video", value: "HDMI 2.1, 3x DisplayPort 1.4a" },
        { key: "Compatibilidad con PSU", value: "Requiere fuente de 550W o superior" }
      ],
      availability: "En stock y listo para envío.",
      images: [
        placa30601,
        placa30602,
        placa30603
      ]
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
        { key: "TDP", value: "220 W" },
        { key: "Conectores de Video", value: "HDMI 2.1, 3x DisplayPort 1.4a" },
        { key: "Compatibilidad con PSU", value: "Requiere fuente de 650W o superior" }
      ],
      availability: "En stock y listo para envío.",
      images: [
        placa30701,
        placa30702,
        placa30703
      ]
    },
    // Más productos...
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

  return product ? (
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row items-start md:items-center">
        {/* Carrusel de imágenes */}
        <div className="w-full md:w-1/2">
          <Slider {...settings} className="mb-6">
            {product.images.map((image, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  className="w-full h-auto rounded-lg object-contain border border-gray-200 shadow-sm"
                  style={{ maxHeight: '400px' }}
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Información del producto */}
        <div className="w-full md:w-1/2 md:pl-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">{product.name}</h2>
          <p className="text-base md:text-xl text-gray-600 mb-6">{product.description}</p>
          <ul className="mb-6 space-y-2">
            {product.specs.map(spec => (
              <li key={spec.key} className="text-base md:text-lg text-gray-700">
                <span className="font-semibold">{spec.key}:</span> {spec.value}
              </li>
            ))}
          </ul>
          <div className="mb-6">
            <span className="text-2xl md:text-3xl font-bold text-orange-600 mr-4">${product.priceCurrent}</span>
            <span className="text-xl md:text-2xl text-gray-400 line-through">${product.priceBefore}</span>
          </div>
          <p className="text-green-600 font-semibold mb-4">{product.availability}</p>
          <button className="w-full md:w-auto bg-orange-600 text-white text-lg px-8 py-4 rounded-lg hover:bg-orange-700 transition duration-300 ease-in-out shadow-lg">
            Comprar Ahora
          </button>
        </div>
      </div>
    </div>
  ) : (
    <p className="text-center text-gray-500">Producto no encontrado</p>
  );
};

export default ProductPlaca;
