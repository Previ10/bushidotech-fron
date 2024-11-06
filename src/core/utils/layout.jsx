import React from 'react'
import{Navbar, Footer} from '../../Features/products/Presentation/components/exports'

export const Layout = ({children}) => {

  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup}/> 
      {children} 
      <Footer/>
    </>
  )
}


