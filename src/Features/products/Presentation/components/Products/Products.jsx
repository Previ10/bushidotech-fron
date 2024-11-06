import Img1 from "../../../../../assets/women/pc2.jpeg";
import Img2 from "../../../../../assets/women/pc.jpeg";
import Img3 from "../../../../../assets/women/pc3.jpeg";
import Img4 from "../../../../../assets/women/pc4.jpeg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Procesador de última generación",
    rating: 5.0,
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Placas de Video",
    rating: 4.5,
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Memoria RAM de alta velocidad",
    rating: 4.7,
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Motherboards",
    rating: 4.4,
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Disco SSD de alto rendimiento",
    rating: 4.5,
    aosDelay: "800",
  },
];

export const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Productos más vendidos para ti
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold text-gray-900 dark:text-white">
            Productos
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-500 dark:text-gray-400">
            Encuentra los mejores componentes para tu PC con descuentos
            increíbles. Calidad y rendimiento garantizados.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {/* Card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-3 rounded-lg shadow-md"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[180px] w-[120px] object-cover rounded-md"
                />
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {data.title}
                  </h3>
                  <div className="flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {data.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View all button */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-2 px-6 rounded-md hover:bg-primary-dark transition duration-300">
              Ver todos los productos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
