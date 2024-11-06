import Img1 from "../../../../../assets/shirt/Img1.png";
import Img2 from "../../../../../assets/shirt/img2.png";
import Img3 from "../../../../../assets/shirt/Img3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Procesador Intel Core i9-12900K",
    description:
      "El procesador Intel Core i9-12900K ofrece un rendimiento excepcional con 16 núcleos y 24 hilos de procesamiento. Ideal para juegos y tareas exigentes.",
  },
  {
    id: 2,
    img: Img2,
    title: "Tarjeta Gráfica NVIDIA GeForce RTX 3080",
    description:
      "La tarjeta gráfica NVIDIA GeForce RTX 3080 ofrece un rendimiento de vanguardia con trazado de rayos en tiempo real y tecnología de inteligencia artificial para juegos ultrarrápidos.",
  },
  {
    id: 3,
    img: Img3,
    title: "Placa Base ASUS ROG Strix Z690-E Gaming WiFi",
    description:
      "La placa base ASUS ROG Strix Z690-E Gaming WiFi está diseñada para los entusiastas del juego y del overclocking, con soporte para procesadores Intel de última generación y conectividad avanzada.",
  },
];

export const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div className="mt-14 mb-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Sección de cabecera */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-blue-500">
            Productos mejor valorados para ti
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Mejores productos de PC
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Encuentra los mejores componentes de PC seleccionados para ofrecerte rendimiento y calidad.
          </p>
        </div>

        {/* Sección del cuerpo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-8 place-items-center">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className="relative group max-w-[300px]"
            >
              <div className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-blue-500 hover:text-white shadow-xl duration-300">
                {/* Sección de imagen */}
                <div className="h-[200px] flex justify-center items-center">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="max-w-[140px] transform group-hover:scale-105 duration-300 drop-shadow-md"
                  />
                </div>
                {/* Sección de detalles */}
                <div className="p-4 text-center transition-all duration-300 ease-in-out transform group-hover:h-auto">
                  {/* Clasificación por estrellas */}
                  <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{data.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 group-hover:line-clamp-none">
                    {data.description}
                  </p>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    onClick={handleOrderPopup}
                  >
                    Ordenar ahora
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};