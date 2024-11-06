import { IoCloseOutline } from "react-icons/io5";
import Logo from "../../../../../assets/logopopup.png";

export const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex items-center justify-center">
            <div className="p-4 shadow-md bg-white dark:bg-gray-900 rounded-lg duration-200 w-[300px] relative">
              {/* header */}
              <div className="flex items-center justify-end">
                <IoCloseOutline
                  className="text-2xl cursor-pointer"
                  onClick={() => setOrderPopup(false)}
                />
              </div>
              <div className="flex flex-col items-center mt-4">
                <img src={Logo} alt="Logo" className="w-16 mb-4" />
                <h1 className="text-lg font-bold">Realizar Pedido</h1>
              </div>
              {/* form section */}
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Nombre"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 mb-4"
                />
                <input
                  type="email"
                  placeholder="Correo Electrónico"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 mb-4"
                />
                <input
                  type="text"
                  placeholder="Dirección"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-3 py-2 mb-4"
                />
                <div className="flex justify-center">
                  <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-md">
                    Ordenar Ahora
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
