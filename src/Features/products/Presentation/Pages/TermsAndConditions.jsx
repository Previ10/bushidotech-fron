import React from 'react';

const TermsAndConditions = () => {
    return (
        <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-6 border-b pb-2">Términos y Condiciones</h1>

            <h2 className="text-2xl font-semibold text-gray-700 mt-6">1. Compra</h2>
            <p className="text-gray-600 leading-relaxed mt-2">
                Al realizar una compra y efectuar el pago mediante depósito o transferencia, el cliente se compromete a informar el pago a través del sitio web antes de la fecha de vencimiento de la reserva para evitar su cancelación. Los datos proporcionados para la facturación deben coincidir con los del titular de la transferencia.
            </p>

            <h2 className="text-2xl font-semibold text-gray-700 mt-6">2. Garantía</h2>
            <p className="text-gray-600 leading-relaxed mt-2">
                Al utilizar el servicio de Post Venta de Newton Station S.R.L. usted acepta los términos y condiciones de la garantía. Newton Station S.R.L. ofrece garantía sobre los productos vendidos, la venta se realiza exclusivamente a través de la página web <a href="http://www.BushidoTech.com" className="text-blue-600 underline hover:text-blue-800">www.BushidoTech.com</a>. Bajo ningún concepto se realizan ventas por otra vía/medio.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mt-4">A. Validez de la garantía</h3>
            <p className="text-gray-600 leading-relaxed mt-2">
                Toda garantía de producto queda sujeta a la revisión y validación por parte del personal técnico de Newton Station S.R.L. Quien determinará si el producto cumple con las condiciones de garantía de acuerdo con las políticas de cada marca para sus productos. La comunicación telefónica, web, mail, el pedido de información, coordinación y/o envío del producto hacia las instalaciones de Newton Station (la lista no es limitante) no conforman la validación ni aceptación del producto como en garantía.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mt-4">B. Tiempo de garantía</h3>
            <p className="text-gray-600 leading-relaxed mt-2">
                El tiempo de garantía del producto se encuentra indicado en la factura de compra. De realizar una compra con varios ítems, el tiempo de garantía de cada producto estará detallado en la factura. Es requisito conservar la caja, empaque, manuales, etiquetas y accesorios para realizar el trámite de garantía. Si el fabricante del producto ofrece un tiempo mayor de garantía, pasado el tiempo de garantía que ofrece Newton Station S.R.L., el cliente debe contactarse directamente con la marca.
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mt-4">C. Cobertura de garantía</h3>
            <p className="text-gray-600 leading-relaxed mt-2">
                Se cubrirán los desperfectos del uso normal de los productos; para ello, el equipo técnico de Posventa realizará la revisión correspondiente, y así se cerciorará de que el daño/defecto no se ocasionó por uso inadecuado del cliente...
            </p>

            <h3 className="text-xl font-semibold text-gray-700 mt-4">D. Devolución</h3>
            <p className="text-gray-600 leading-relaxed mt-2">
                Dentro de los 30 días corridos de recibida la compra, el cliente puede pedir la devolución para recibir la Nota de Crédito...
            </p>

            

        </div>
    );
};

export default TermsAndConditions;
