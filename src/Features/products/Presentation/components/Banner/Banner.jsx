import BannerImg from "../../../../../assets/women/pc7.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

export const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* sección de imagen */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt="Ofertas de computadoras"
              className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-lg rounded-lg object-cover"
            />
          </div>

          {/* sección de detalles del texto */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-4xl sm:text-5xl font-extrabold">
              Oferta de hasta 50% de descuento
            </h1>
            <p
              data-aos="fade-up"
              className="text-base sm:text-lg tracking-wide leading-6"
            >
              Encuentra las mejores computadoras al mejor precio. Calidad garantizada y entrega rápida.
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-500 text-white" />
                <p className="text-lg">Productos de Calidad</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-500 text-white" />
                <p className="text-lg">Entrega Rápida</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-500 text-white" />
                <p className="text-lg">Método de Pago Fácil</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-3 rounded-full bg-orange-500 text-white" />
                <p className="text-lg">Grandes Ofertas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};