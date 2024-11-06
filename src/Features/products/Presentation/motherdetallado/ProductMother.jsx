import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Slider from "react-slick";
import { FaCheckCircle, FaTruck, FaShareAlt, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa'; 



import { useGetProductByIdQueryHook } from '../hooks/use_get_product_by_id_hook';
import { useProductLocalStorage } from '../data/local/products_local_data_sources';

const ProductPlaca = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data:product, loading, error } = useGetProductByIdQueryHook(id);
  const {setProductsInShoppingCart} = useProductLocalStorage();
  const handleAddProductToShoppingCart = ()=> {
    setProductsInShoppingCart([product]);
    console.log(product);

  }
  const images = [
       product?.image
        ];


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
    <div className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row items-start md:items-center">
        {/* Carrusel de imágenes */}
        <div className="w-full md:w-1/2">
          <Slider {...settings} className="mb-6">
            {images.map((image, index) => (
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
        <div className="w-full md:w-1/2 md:pl-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">{product.name}</h2>
          <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">{product.description}</p>

          {/* Precios */}
          <div className="mb-6">
            <span className="text-4xl font-bold text-orange-600">${product.precio}</span>
            <span className="text-xl text-gray-400 line-through ml-4">${product.precio + product.precio * 0.15}</span>
          </div>

          {/* Opciones verdes */}
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
            <div className="flex items-center mb-4"> {/* Margen añadido aquí */}
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
            <button 
            onClick={handleAddProductToShoppingCart}
            className="w-full md:w-auto bg-orange-600 text-white text-lg px-8 py-4 rounded-lg hover:bg-orange-700 transition duration-300 ease-in-out shadow-lg">
              Sumar al Carrito
            </button>
          </div>

          {/* <button className="w-full md:w-auto bg-orange-600 text-white text-lg px-8 py-4 rounded-lg hover:bg-orange-700 transition duration-300 ease-in-out shadow-lg mt-4"> 
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
              <li>Socket: {product?.details?.general?.socket}</li>
              <li>Chipset: {product?.details?.general?.chipset}</li>
              <li>Memoria: {product?.details?.general?.memory}</li>
              <li>Slots de Expansión: {product?.details?.general?.expansionSlots}</li>
              <li>Almacenamiento: {product?.details?.general?.storage}</li>
              <li>Red: {product?.details?.general?.network}</li>
              <li>Audio: {product?.details?.general?.audio}</li>
            </ul>?
          </div>
          <div>
            <h4 className="font-semibold text-lg text-gray-700">Conectividad</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>VGA: {product?.details?.connectivity?.vga}</li>
              <li>DVI: {product?.details?.connectivity?.dvi}</li>
              <li>HDMI: {product?.details?.connectivity?.hdmi}</li>
              <li>Puertos Display: {product?.details?.connectivity?.displayPorts}</li>
              <li>USB Tipo-C: {product?.details?.connectivity?.usbTypeC}</li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-lg text-gray-700">Consumo de Energía</h4>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>Consumo energético: {product?.details?.power?.energyConsumption}</li>
              <li>Recomendación de fuente: {product?.details?.power?.recommendedPower}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-gray-700">Dimensiones</h4>x
            <ul className="mt-3 space-y-2 text-gray-600">
              <li>Longitud: {product?.details?.dimensions?.length}</li>
              <li>Ancho: {product?.details?.dimensions?.width}</li>
              <li>Espesor: {product?.details?.dimensions?.thickness}</li>
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
              <p className="text-gray-600">{product?.description}</p>
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
