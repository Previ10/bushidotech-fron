import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import ryzen5600 from '../../../../assets/Procesador/ryzen5600.jpg';
import ryzen56002 from '../../../../assets/Procesador/ryzen56002.png';
import ryzen56003 from '../../../../assets/Procesador/ryzen56003.png';

import ryzen58003 from '../../../../assets/Procesador/ryzen85003.png';
import ryzen58002 from '../../../../assets/Procesador/ryzen85002.png';
import ryzen58001 from '../../../../assets/Procesador/ryzen85001.png';

const ProductDetail = () => {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "AMD Ryzen 5 5600GT - Combo de Actualización",
      priceCurrent: "308,300",
      priceBefore: "311,400",
      description: "Eleva el rendimiento de tu sistema con el procesador AMD Ryzen 5 5600GT, diseñado para entusiastas de los juegos y creadores de contenido. Disfruta de una velocidad excepcional y una multitarea sin esfuerzo.",
      specs: [
        { key: "Núcleos", value: "6" },
        { key: "Hilos", value: "12" },
        { key: "Frecuencia Base", value: "3.9 GHz" },
        { key: "Frecuencia Máxima", value: "4.4 GHz" },
        { key: "Caché L3", value: "32 MB" },
        { key: "TDP", value: "65 W" },
        { key: "Compatibilidad con Placas Base", value: "AM4" }
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
      name: "AMD Ryzen 5 8500G - Combo de Actualización",
      priceCurrent: "345,900",
      priceBefore: "352,000",
      description: "Eleva el rendimiento de tu sistema con el procesador AMD Ryzen 5 8500G, diseñado para entusiastas de los juegos y creadores de contenido. Disfruta de una velocidad excepcional y una multitarea sin esfuerzo.",
      specs: [
        { key: "Núcleos", value: "8" },
        { key: "Hilos", value: "16" },
        { key: "Frecuencia Base", value: "3.8 GHz" },
        { key: "Frecuencia Máxima", value: "4.7 GHz" },
        { key: "Caché L3", value: "36 MB" },
        { key: "TDP", value: "65 W" },
        { key: "Compatibilidad con Placas Base", value: "AM5" }
      ],
      availability: "En stock y listo para envío.",
      images: [
        ryzen58003,
        ryzen58002,
        ryzen58001
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

export default ProductDetail;
