import React from "react";

export const UserProfileModal = ({ showModal, setShowModal, user, handleLogOut }) => {
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full max-w-md relative">

        {/* Botón X para cerrar*/}
        <button
          className="absolute top-3 right-3 text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
          onClick={() => setShowModal(false)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-xl font-bold mb-4 dark:text-white">Mi Perfil </h2>

        <div className="space-y-2">
          <div>
            <strong className="dark:text-gray-400">Nombre:</strong> {user.name}
          </div>
          <div>
            <strong className="dark:text-gray-400">Apellido:</strong> {user.lastname}
          </div>
          <div>
            <strong className="dark:text-gray-400">Email:</strong> {user.email}
          </div>
          <div>
            <strong className="dark:text-gray-400">Provincia:</strong> {user.provincia}
          </div>
          <div>
            <strong className="dark:text-gray-400">Ciudad:</strong> {user.ciudad}
          </div>
          <div>
            <strong className="dark:text-gray-400">DNI:</strong> {user.dni}
          </div>
        </div>

        <div className="flex space-x-4 mt-4">
          <button
            className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition"
            onClick={() => {
              handleLogOut(); 
              setShowModal(false); // Cierro el modal
            }}
          >
            Cerrar sesión
          </button>
        </div>

      </div>
    </div>
  );
};
