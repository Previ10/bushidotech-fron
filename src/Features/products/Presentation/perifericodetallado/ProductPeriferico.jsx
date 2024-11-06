import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import gpro1 from '../../../../assets/Perifericos/gpro1.png';
import gpro2 from '../../../../assets/Perifericos/gpro2.png';
import gpro3 from '../../../../assets/Perifericos/gpro3.png';

// ID2..
import razer1 from '../../../../assets/Perifericos/razer1.png';
import razer2 from '../../../../assets/Perifericos/razer2.png';
import razer3 from '../../../../assets/Perifericos/razer3.png';

const ProductPlaca = () => {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Teclado Logitech G Pro",
      priceCurrent: "108,300",
      priceBefore: "111,400",
      description: "El Teclado Logitech G Pro está diseñado para jugadores profesionales y entusiastas, ofreciendo switches mecánicos de alto rendimiento, iluminación RGB personalizable, y un diseño compacto y portátil para llevarlo a cualquier lugar.",
      specs: [
        { key: "Tipo de Switch", value: "Mecánico GX Blue" },
        { key: "Iluminación", value: "RGB LIGHTSYNC" },
        { key: "Conectividad", value: "Cable USB desmontable" },
        { key: "Tamaño", value: "Tenkeyless (sin teclado numérico)" },
        { key: "Compatibilidad", value: "Windows 7 o posterior, macOS 10.11 o posterior" },
        { key: "Peso", value: "980 g" },
        { key: "Dimensiones", value: "361 mm x 153 mm x 34 mm" }
      ],
      availability: "En stock y listo para envío.",
      images: [
        gpro1,
        gpro2,
        gpro3
      ]
    },
    {
      id: 2,
      name: "Ratón Gaming Razer DeathAdder V2",
      priceCurrent: "79,350",
      priceBefore: "83,150",
      description: "El Ratón Gaming Razer DeathAdder V2 ofrece un diseño ergonómico icónico y un sensor óptico de alta precisión para un rendimiento superior en juegos. Con switches ópticos Razer y una forma cómoda, es ideal para sesiones de juego prolongadas.",
      specs: [
        { key: "Sensor", value: "Razer Focus+ óptico de 20,000 DPI" },
        { key: "Velocidad", value: "650 IPS" },
        { key: "Switches", value: "Razer Optical Mouse Switches" },
        { key: "Iluminación", value: "Razer Chroma RGB" },
        { key: "Botones Programables", value: "8 botones" },
        { key: "Conectividad", value: "Cable USB Speedflex" },
        { key: "Peso", value: "82 g" }
      ],
      availability: "En stock y listo para envío.",
      images: [
        razer1,
        razer2,
        razer3
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
