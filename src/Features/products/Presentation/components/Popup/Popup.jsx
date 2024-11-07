import { IoCloseOutline } from "react-icons/io5";
import Logo from "../../../../../assets/logopopup.png";
import { useMemo, useState } from "react";

export const Popup = ({ orderPopup, setOrderPopup, shoppingCart, cleanShoppingCart }) => {

  const handleCleanCart = () => {
    cleanShoppingCart();
    setOrderPopup(false);

  }

  const totalAmount = useMemo(() => {
    if (shoppingCart) {
      if (shoppingCart?.length === 0) return 0
      let total = 0
      for (const element of shoppingCart) {
        total += element.precio
      }
      return total;
    }
    return 0;
  }, [shoppingCart])

  return (
    <>
      {orderPopup && (
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm flex items-center justify-center">
            <div className=" overflow-auto p-4 shadow-md bg-white dark:bg-gray-900 rounded-lg duration-200 w-[800px] relative max-h-[600px]">
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
              <div className=" py-5 flex flex-col gap-4">
                {
                  shoppingCart?.map(cart => {

                    return (

                      
                      <div className="flex justify-between items-center w-full ">
                        <div className="flex gap-4 items-center"> 
                        <div className="w-20 h-20 " >
                          <img className='w-full h-full' src={cart.image} />
                        </div>
                        <p className="text-black font-bold">
                          {
                            cart.name
                          }
                        </p> </div>
                        <p className="text-cyan-500 font-bold">
                          {
                            cart.precio.toLocaleString("en-US", { style: "currency", currency: "USD" })
                          }
                        </p>
                      </div>


                    )
                  })

                }
                <hr className="py-2 mt-2" />

                <div className="w-full justify-between flex">
                  <p>
                    {
                      'TOTAL'
                    }
                  </p>
                  <p>
                    {
                      totalAmount.toLocaleString("en-US", { style: "currency", currency: "USD" })
                    }
                  </p>
                </div>
               <div className="w-[220px]"> <button className=" px-3 py-2 bg-orange-500 text-white border-[1px] rounded-lg"
                  onClick={
                    handleCleanCart
                  }
                >
                  Limpiar Carrito
                </button></div>

              </div>


            </div>
          </div>
        </div>

      )}
    </>
  );
};


// MERCADO PAGO

// import "./Product.css";
// import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
// import axios from "axios";
// import { useState } from "react";

// const Product = () => {
//     const [preferenceId, setPreferenceId] = useState(null);

//     initMercadoPago("YOUR_PUBLIC_KEY", {
//         locale: "es-AR",
//     });

//     const createPreference = async () => {
//         try {
//             const response = await axios.post("http://localhost:3000/create_preference", {
//                 title: "Bushido",
//                 quantity: 1,
//                 price: 550,
//             });
//             setPreferenceId(response.data.preferenceId);
//         } catch (error) {
//             console.error("Error creating preference:", error);
//         }
//     };

//     return (
//         <div>
//             <button onClick={createPreference}>Create Preference</button>
//             {preferenceId && <Wallet initialization={{ preferenceId }} />}
//         </div>
//     );
// };

// export default Product;



// const handleBuy = async () => {
//   const id = await createPreference();
//   if (id) {
//       setPreferenceId(id);
//   }
// };
