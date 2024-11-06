import React from 'react';
import { Link } from 'react-router-dom';
import ryzen5 from '../../../../assets/Procesador/ryzen5.jpg';
import ryzen58500 from '../../../../assets/Procesador/ryzen58500.png';

export const ProcesorsPage = () => {
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

  const products = [
    {
      id: 1,
      name: 'Combo Actualización Procesador AMD Ryzen 5 5600GT',
      image: ryzen5,
      price: '308,300',
      previousPrice: '311,400',
      available: true,
    },
    {
      id: 2,
      name: 'Combo Actualización Procesador AMD Ryzen 5 8500G',
      image: ryzen58500,
      price: '379,350',
      previousPrice: '383,150',
      available: true,
    }
  ];

  return (
    <div className='flex'>
      {/* Sidebar */}
      <div className='w-64 bg-gray-100 p-8'>
        <h2 className='font-semibold text-xl mb-6 text-orange-500'>Categorías</h2>
        <ul>
          {categories.map((category, index) => (
            <li key={index} className='mb-3 hover:bg-orange-100 hover:text-orange-700 p-3 rounded cursor-pointer'>
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Product Grid */}
      <div className='flex-grow p-10 bg-gray-50'>
        <h1 className='text-center text-4xl font-semibold mb-12 text-orange-500'>Procesadores</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {products.map((product) => (
            <Link to={`/procesadores/${product.id}`} key={product.id}>
              <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col'>
                <img className='w-full' src={product.image} alt={product.name} />
                <div className='px-6 py-4 flex-grow'>
                  <div className='font-semibold text-xl mb-2 text-gray-800'>{product.name}</div>
                  <p className='text-gray-600 text-base'>
                    Precio: <span className='text-orange-500'>{product.price}</span> (Antes: <span className='line-through text-gray-400'>{product.previousPrice}</span>)
                  </p>
                </div>
                <div className='px-6 py-4'>
                  {product.available ? (
                    <span className='inline-block bg-green-100 rounded-full px-3 py-1 text-sm font-semibold text-green-700'>
                      Disponible
                    </span>
                  ) : (
                    <span className='inline-block bg-red-100 rounded-full px-3 py-1 text-sm font-semibold text-red-700'>
                      No disponible
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
