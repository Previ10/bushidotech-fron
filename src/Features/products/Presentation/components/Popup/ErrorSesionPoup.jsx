import React from 'react';
import bushidoLogo from "../../../../../assets/logopopup.png"; 

const LoginPromptModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 w-11/12 max-w-lg relative shadow-lg">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-900">
          &times;
        </button>

        <div className="flex justify-center mb-4">
          <img src={bushidoLogo} alt="Bushido Logo" className="h-16" />
        </div>

        <h2 className="text-xl font-bold mb-4 text-center">Por favor, inicie sesión</h2>
        <p className="text-gray-700 mb-6 text-center">Debe iniciar sesión antes de añadir productos al carrito.</p>
        
        <button
          onClick={onClose}
          className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition duration-300 ease-in-out w-full"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default LoginPromptModal;