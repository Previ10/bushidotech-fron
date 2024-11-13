import { IoCloseOutline } from "react-icons/io5";
import Logo from "../../../../../assets/logopopup.png";
import { useEffect, useMemo, useState } from "react";
import { Wallet } from "@mercadopago/sdk-react";
import { UseCreatePreferenceMutationHook } from "../../hooks/use_create_preference_mutation_hook";


export const Popup = ({ orderPopup, setOrderPopup, shoppingCart, cleanShoppingCart, user }) => {
  const { mutate, data, loading, error } = UseCreatePreferenceMutationHook();
  const [preferenceId, setPreferenceId] = useState(null);

  const handleBuy = async () => {
    try {
      const response = await Promise.all(
        shoppingCart.map(item => 
          mutate({ productId: item.id, quantity: item.quantity || 1 })
        )
      );
      setPreferenceId(response[0]?.data?.createPreference?.id); 
    } catch (error) {
      console.error("Error al crear la preferencia de pago:", error);
    }
  };

  useEffect(() => {
    if (!user) {
      cleanShoppingCart();
      setOrderPopup(false); 
    }
  }, [user, cleanShoppingCart, setOrderPopup]);

  const handleCleanCart = () => {
    cleanShoppingCart();
    setOrderPopup(false);
  };

  const totalAmount = useMemo(() => {
    if (shoppingCart) {
      return shoppingCart.reduce((total, element) => total + element.precio, 0);
    }
    return 0;
  }, [shoppingCart]);

  const openMercadoPagoUrl = () => {
    const url = data?.createPreference;
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <>
      {orderPopup && (
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex items-center justify-center">
            <div className="overflow-auto p-4 shadow-md bg-white dark:bg-gray-900 rounded-lg duration-200 w-[800px] relative max-h-[600px]">
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
              <div className="py-5 flex flex-col gap-4">
                {shoppingCart?.map(cart => (
                  <div className="flex justify-between items-center w-full" key={cart.id}>
                    <div className="flex gap-4 items-center">
                      <div className="w-20 h-20">
                        <img className="w-full h-full" src={cart.image} alt={cart.name} />
                      </div>
                      <p className="text-black font-bold">{cart.name}</p>
                    </div>
                    <p className="text-cyan-500 font-bold">
                      {cart.precio.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                    </p>
                  </div>
                ))}
                <hr className="py-2 mt-2" />

                <div className="w-full justify-between flex">
                  <p>{'TOTAL'}</p>
                  <p>
                    {totalAmount.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                  </p>
                </div>
                <div className="w-[220px]">
                  <button
                    className="px-3 py-2 bg-orange-500 text-white border-[1px] rounded-lg"
                    onClick={handleCleanCart}
                  >
                    Limpiar Carrito
                  </button>

                  {shoppingCart?.length > 0 && (
                    <>
                      <button
                        className="px-3 py-2 bg-orange-500 text-white border-[1px] rounded-lg mt-2"
                        onClick={handleBuy}
                        disabled={loading}
                      >
                        {loading ? "Procesando..." : "Comprar"}
                      </button>

                      {data && (
                        <div className="mt-4">
                          <button
                            onClick={openMercadoPagoUrl}
                            className="px-3 py-2 bg-blue-500 text-white border-[1px] rounded-lg"
                          >
                            Pagar con Mercado Pago
                          </button>
                        </div>
                      )}
                    </>
                  )}

                  {error && <p className="text-red-500">Error al crear la preferencia de pago.</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};