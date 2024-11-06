import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import asusb5501 from '../../../../assets/mother/asusb5501.png';
import asusb5502 from '../../../../assets/mother/asusb5502.png';
import asusb5503 from '../../../../assets/mother/asusb5503.png';

// ID2..
import msi1 from '../../../../assets/mother/msi1.png';
import msi2 from '../../../../assets/mother/msi2.png';
import msi3 from '../../../../assets/mother/msi3.png';

const ProductPlaca = () => {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Motherboard ASUS ROG Strix B550-F Gaming",
      priceCurrent: "308,300",
      priceBefore: "311,400",
      description: "La ASUS ROG Strix B550-F Gaming es una placa madre diseñada para gamers y entusiastas, ofreciendo compatibilidad con los últimos procesadores AMD Ryzen y características avanzadas como PCIe 4.0, Wi-Fi 6, y un diseño robusto para un rendimiento excepcional.",
      specs: [
        { key: "Socket", value: "AM4" },
        { key: "Chipset", value: "AMD B550" },
        { key: "Memoria", value: "4 x DIMM, máx. 128 GB, DDR4" },
        { key: "Slots de Expansión", value: "2 x PCIe 4.0 x16, 3 x PCIe 3.0 x1" },
        { key: "Almacenamiento", value: "2 x M.2, 6 x SATA 6Gb/s" },
        { key: "Red", value: "Intel I225-V 2.5Gb Ethernet" },
        { key: "Audio", value: "ROG SupremeFX 7.1 Surround Sound" }
      ],
      availability: "En stock y listo para envío.",
      images: [
        asusb5501,
        asusb5502,
        asusb5503
      ]
    },
    {
      id: 2,
      name: "Motherboard MSI MPG Z490 Gaming Edge WiFi",
      priceCurrent: "379,350",
      priceBefore: "383,150",
      description: "La MSI MPG Z490 Gaming Edge WiFi es una placa madre de alto rendimiento diseñada para entusiastas y gamers, con soporte para los últimos procesadores Intel Core de décima generación, conectividad Wi-Fi 6, y un diseño avanzado para un rendimiento y estabilidad excepcionales.",
      specs: [
        { key: "Socket", value: "LGA 1200" },
        { key: "Chipset", value: "Intel Z490" },
        { key: "Memoria", value: "4 x DIMM, máx. 128 GB, DDR4" },
        { key: "Slots de Expansión", value: "2 x PCIe 3.0 x16, 3 x PCIe 3.0 x1" },
        { key: "Almacenamiento", value: "2 x M.2, 6 x SATA 6Gb/s" },
        { key: "Red", value: "2.5G LAN y Wi-Fi 6" },
        { key: "Audio", value: "Realtek ALC1200 7.1 Surround Sound" }
      ],
      availability: "En stock y listo para envío.",
      images: [
        msi1,
        msi2,
        msi3
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
