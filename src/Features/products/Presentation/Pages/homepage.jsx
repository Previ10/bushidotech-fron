import React from 'react'
import{ Banner,Hero,Popup,Products,Subscribe,Testimonials,TopProducts} from '../components/exports'
import AOS from "aos";
import "aos/dist/aos.css";


export const Homepage = () => {

  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, [
      
    

  ]);
  
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
    <Hero handleOrderPopup={handleOrderPopup} />
    <Products />
    <TopProducts handleOrderPopup={handleOrderPopup} />
    <Banner />
    <Subscribe />
    <Products />
    <Testimonials />
    <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
  </div>
  )
}
