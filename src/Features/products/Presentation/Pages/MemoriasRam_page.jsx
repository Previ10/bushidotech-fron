import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import emptyProductImg from '../../../../assets/emptyProductImg.png';
import emptyProductImgPlaceHolder from '../../../../assets/no-product-found.jpg';
import { useGetProductQueryHook } from '../hooks/use_get_product_query_hook';

export const MemoriasRamPage = () => {
  const { data: products, error, loading } = useGetProductQueryHook({ category: "Memorias RAM" });
  console.log("DATA DE PRODUCTOS", products);

  const categories = [
    'Componentes de PC',
    'Coolers',
    'Discos Duros HDD',
    'Discos Sólidos SSD',
    'Fuentes',
    'Gabinetes',
    'Memorias RAM',
    'Motherboards',
    'Placas de Video',
    'Procesadores'
  ];

  // Estado para los productos favoritos
  const [favoriteProducts, setFavoriteProducts] = useState({});

  const [listFavorite, setListFavorite] = useState([]);
  
  // Función para agregar o quitar 
  const toggleFavorite = (e, productId) => {
    
    e.preventDefault();
    setListFavorite([...listFavorite,productId])
    
    setFavoriteProducts(prevState => ({
      ...prevState,
      [productId]: !prevState[productId] 
    }));
  };
  console.log(listFavorite)
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-8">
        <h2 className="font-semibold text-xl mb-6 text-orange-500">Categorías</h2>
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              className="mb-3 hover:bg-orange-100 hover:text-orange-700 p-3 rounded cursor-pointer"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Product Grid */}
      <div className="flex-grow p-10 bg-gray-50">
        <h1 className="text-center text-4xl font-semibold mb-12 text-orange-500">Memorias RAM</h1>

        {products?.length === 0 || products === undefined ? (
          <div className='w-full h-full flex items-center justify-center'>
            <img className='object-contain w-full h-full' src={emptyProductImgPlaceHolder} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products?.map((product) => (
              <Link to={`/motherboards/${product.id}`} key={product.id} className="relative">
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col relative">
                  {/* Corazón en la esquina superior derecha */}
                  <button
                    onClick={(e) => toggleFavorite(e, product.id)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-red-500 focus:outline-none z-10"
                  >
                    <FontAwesomeIcon
                      icon={faHeart}
                      className={favoriteProducts[product.id] ? 'text-red-500' : 'text-gray-400'}
                    />
                  </button>
                  <img className="w-full" src={product.image !== '' ? product.image : emptyProductImg} alt={product.name} />
                  <div className="px-6 py-4 flex-grow">
                    <div className="font-semibold text-xl mb-2 text-gray-800">{product.name}</div>
                    <p className="text-gray-600 text-base">
                      Precio: <span className="text-orange-500">{product.price}</span> (Antes: <span className="line-through text-gray-400">{product.previousPrice}</span>)
                    </p>
                  </div>
                  <div className="px-6 py-4">
                    {product.stock > 0 ? (
                      <span className="inline-block bg-green-100 rounded-full px-3 py-1 text-sm font-semibold text-green-700">
                        Disponible
                      </span>
                    ) : (
                      <span className="inline-block bg-red-100 rounded-full px-3 py-1 text-sm font-semibold text-red-700">
                        No disponible
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
