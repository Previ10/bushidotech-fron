import React from 'react';
import { useCreateProductController } from '../hooks/use_create_product_controller_hook';
import { AccordionComponent } from '../../../../core/utils/accordition'

export const CreateProductPage = () => {
  const {
    errors,
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    touched,
    loading,
    data,
    handleFileChange,
    features,
    selectedCategory,
    setSelectedCategory,
    currentFeature,
    setCurrentFeature,
    handleAddFeature,
    handleRemoveFeature
  } = useCreateProductController();

  console.log("Data es true ", data)
  return (
    <>
      <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900">
        {/* Columna para el formulario */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="relative p-6 shadow-md bg-white dark:bg-gray-900 rounded-lg duration-200 w-[90%] max-w-[600px]">
            <div className="flex flex-col items-start">
              <h2 className="mb-4 text-2xl font-semibold">
                Cargar un Producto
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-wrap -mx-2">
                {[
                  { label: "Nombre del Producto", name: "name", type: "text" },
                  { label: "Descripción", name: "description", type: "text" },
                  { label: "Marca", name: "brand", type: "text" },
                  {
                    label: "Tipo", name: "type", type: "select", options: [
                      { value: "Procesadores", label: "Procesadores" },
                      { value: "Placas de Video", label: "Placas de Video" },
                      { value: "Periféricos", label: "Periféricos" },
                      { value: "Motherboards", label: "Motherboards" },
                      { value: "Cooler", label: "Cooler" },
                      { value: "Discos duros HDD", label: "Discos duros HDD" },
                      { value: "Fuentes", label: "Fuentes" },
                      { value: "Gabinetes", label: "Gabinetes" },
                      { value: "Memorias RAM", label: "Memorias RAM" },
                    ]
                  },
                  { label: "Precio", name: "precio", type: "number" },
                  { label: "Stock", name: "stock", type: "number" },
                  {
                    label: "Garantía", name: "garantia", type: "select", options: [
                      { value: "Garantia de 3 meses", label: "Garantía de 3 meses" },
                      { value: "Garantia de 6 meses", label: "Garantía de 6 meses" },
                      { value: "Garantia de 12 meses", label: "Garantía de 12 meses" },
                      { value: "Garantia de 2 años", label: "Garantía de 2 años" },
                      { value: "Garantia especial de por vida", label: "Garantía especial de por vida" },
                    ]
                  },
                  { label: "Imagen (Base64)", name: "image", type: "file" },
                ].map(({ label, name, type, options }, index) => {
                  if (type === "select") {
                    return (
                      <div
                        key={`${name}-${index}`}
                        className="w-full md:w-1/2 px-2 mb-4"
                      >
                        <label
                          htmlFor={name}
                          className="block text-sm font-medium text-gray-700"
                        >
                          {label}
                        </label>
                        <select
                          name={name}
                          id={name}
                          value={values[name]}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className="w-full rounded-lg border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1"
                        >
                          {options.map((option, idx) => (
                            <option key={idx} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        {errors[name] && touched[name] && (
                          <p className="text-xs text-red-600 font-semibold text-center">
                            {errors[name]}
                          </p>
                        )}
                      </div>
                    );
                  }
                  if (type === "file") {
                    return (
                      <div
                        key={`${name}-${index}`}
                        className="w-full md:w-1/2 px-2 mb-4"
                      >
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
                          onChange={handleFileChange}
                          className="w-full rounded-lg border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1"
                        />
                        {errors[name] && touched[name] && (
                          <p className="text-xs text-red-600 font-semibold text-center">
                            {errors[name]}
                          </p>
                        )}
                      </div>
                    )
                  }

                  return (
                    <div
                      key={`${name}-${index}`}
                      className="w-full md:w-1/2 px-2 mb-4"
                    >
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
                      />
                      {errors[name] && touched[name] && (
                        <p className="text-xs text-red-600 font-semibold text-center">
                          {errors[name]}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col space-y-2">
                <button
                  type="submit"
                  className="block w-full px-4 py-2 border from-primary to-secondary hover:scale-105 bg-gradient-to-r text-white rounded-lg"
                >
                  {loading ? "Cargando..." : "Crear Producto"}
                </button>
                <button
                  type="button"
                  className="block w-full px-4 py-2 border from-primary to-secondary hover:scale-105 bg-gradient-to-r text-white rounded-lg"
                  onClick={() => window.history.back()}
                >
                  Cancelar
                </button>
              </div>
              </form>

              <AccordionComponent title="Características">
                <div className="space-y-4">
                  <div className="flex space-x-2">
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="border rounded px-2 py-1"
                    >
                      <option value="general">General</option>
                      <option value="conectividad">Conectividad</option>
                      <option value="consumoEnergia">Consumo de Energía</option>
                      <option value="dimensiones">Dimensiones</option>
                    </select>
                    <input
                      type="text"
                      value={currentFeature}
                      onChange={(e) => setCurrentFeature(e.target.value)}
                      placeholder="Agregar característica"
                      className="border rounded px-2 py-1"
                    />
                    {}
                    <button
                      type="button"
                      onClick={handleAddFeature}
                      className="px-3 py-1 bg-blue-500 text-white rounded"
                      disabled={features[selectedCategory].length >= 5 || !currentFeature}
                    >
                      Agregar
                    </button>
                  </div>
                  {Object.keys(features).map((category) => (
                    <div key={category}>
                      <h3 className="font-semibold capitalize mb-2">{category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {features[category].map((feature, index) => (
                          <div key={index} className="flex items-center bg-gray-200 px-2 py-1 rounded-full text-sm">
                            {feature}
                            <button
                              type="button"
                              onClick={() => handleRemoveFeature(category, index)}
                              className="ml-2 text-red-500 focus:outline-none"
                            >
                              &times;
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionComponent>
              {/* Botón de envío del formulario */}
             
          </div>
        </div>
        {data && (
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="relative p-6 shadow-md bg-white dark:bg-gray-900 rounded-lg duration-200 w-[90%] max-w-[600px]">
              <h3 className="text-xl font-semibold mb-4">Información del Producto</h3>
              <div className="space-y-2">
                <p><strong>Nombre:</strong> {data.createProduct.name || 'N/A'}</p>
                <p><strong>Descripción:</strong> {data.createProduct.description || 'N/A'}</p>
                <p><strong>Marca:</strong> {data.createProduct.brand || 'N/A'}</p>
                <p><strong>Tipo:</strong> {data.createProduct.type || 'N/A'}</p>
                <p><strong>Precio:</strong> {data.createProduct.precio ? `$${data.createProduct.precio}` : 'N/A'}</p>
                <p><strong>Stock:</strong> {data.createProduct.stock || 'N/A'}</p>
                {/* <p><strong>Características:</strong> {data.createProduct.features || 'N/A'}</p> */}
                <p><strong>Garantía:</strong> {data.createProduct.garantia || 'N/A'}</p>
                {data.createProduct.image && (
                  <div className="mt-4">
                    <p><strong>Imagen:</strong></p>
                    <img
                      src={data.createProduct.image}
                      alt="Imagen del producto"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};


