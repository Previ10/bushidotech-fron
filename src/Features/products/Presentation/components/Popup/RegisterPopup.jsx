import React from "react";
import bushidoLogo from "../../../../../assets/logopopup.png"; 

import { usePopupRegisterController } from "../../hooks/usePopupRegisterController_hook";
import { PopupRegisterSucess } from "./PopupRegisterSucess";

export const RegisterPopup = ({ showModal, setShowModal }) => {
  const {
    errors,
    showRegisterSucessModal,
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    loading,
    setShowRegisterSucessModal 
  } = usePopupRegisterController({
    showModal,
    setShowModal,
  });


  return (
    <>
      {showModal && (
        <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex items-center justify-center">
          {showRegisterSucessModal ? (
            <PopupRegisterSucess setShowModal={setShowModal}
             setShowRegisterSucessModal={setShowRegisterSucessModal} />
          ) : (
            <div className="relative p-6 shadow-md bg-white dark:bg-gray-900 rounded-lg duration-200 w-[90%] max-w-[600px]">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition duration-200"
                onClick={() => setShowModal(false)}
              >
                X
              </button>
              <div className="flex flex-col items-center">
                <img
                  src={bushidoLogo}
                  alt="Bushido Logo"
                  className="h-32 w-auto mb-4"
                />
                <h2 className="mb-4 text-2xl font-semibold text-center">
                  Crear cuenta
                </h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-wrap -mx-2">
                  {[
                    { label: "Nombre", name: "name", type: "text" },
                    { label: "Apellido", name: "lastname", type: "text" },
                    { label: "Email", name: "email", type: "email" },
                    { label: "DNI", name: "dni", type: "text" },
                    { label: "Dirección", name: "adress", type: "text" },
                    { label: "Ciudad", name: "ciudad", type: "text" },
                    { label: "Provincia", name: "provincia", type: "text" },
                    { label: "Contraseña", name: "password", type: "password" },
                  ].map(({ label, name, type }, index) => (
                    <div key={`${name}-${index}`} className="w-full md:w-1/2 px-2 mb-4">
                      <label
                        htmlFor={name}
                        className="block text-sm font-medium text-gray-700"
                      >
                        {label}
                      </label>
                      <input
                        type={type}
                        id={name}
                        name={name}
                        onBlur={handleBlur(name)}
                        onChange={handleChange(name)}
                        value={values[name]}
                        className="w-full rounded-lg border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1"
                        required
                      />
                      {errors[name] && touched[name] && (
                        <p className="text-xs text-red-600 font-semibold text-center">
                          {errors[name]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col space-y-2">
                  <button
                    type="submit"
                    className="block w-full px-4 py-2 border from-primary to-secondary hover:scale-105 bg-gradient-to-r text-white rounded-lg"
                  >
                    {
                      loading && 'Cargando...'
                    }
                    Registrarse 
                  </button>
                  <button
                    type="button"
                    className="block w-full px-4 py-2 border from-primary to-secondary hover:scale-105 bg-gradient-to-r text-white rounded-lg"
                    onClick={() => setShowModal(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
};
