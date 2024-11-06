import React from 'react'

export const LoginSucessPopup = () => {
    return (
        <>
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[550px] h-[400px]">
                <button
                    className="absolute top-0 right-0 mt-4 mr-4 text-gray-500"
                    onClick={() => setShowModal(false)}
                >
                    X
                </button>
                <div className='h-full w-full flex flex-col justify-between'>
                    <div>
                        <h2 className="mb-4 text-2xl font-semibold text-center">
                            Bienvenido ${}
                        </h2>
                    </div>
                    <div className='w-full flex items-center justify-center'>

                        <img src={bushidoLogo} alt="" className='h-60 w-80' />
                    </div>
                    <div className='w-full flex items-center justify-center'>
                        <button className='text-center py-3 px-3 bg-primary rounded-md'
                            onClick={() => setShowModal(false)}
                        >

                            Comenzar


                        </button>
                    </div>
                </div>


            </div>
        </>
    )
}
