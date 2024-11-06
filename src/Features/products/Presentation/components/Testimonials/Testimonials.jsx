import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Laura M.",
    text: "¡Estoy impresionada con la rapidez de entrega y la calidad del servicio al cliente! Compré mi nueva tarjeta gráfica aquí y no podría estar más feliz.",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Carlos G.",
    text: "Desde que descubrí esta tienda, no he comprado en ningún otro lado. Siempre tienen los mejores precios y una gran variedad de productos.",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "María R.",
    text: "Mi computadora necesitaba una actualización urgente y encontré todo lo que necesitaba aquí. El proceso de compra fue sencillo y rápido.",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "Javier S.",
    text: "Excelente experiencia de compra. Recibí mi pedido en perfectas condiciones y el equipo de atención al cliente respondió todas mis dudas.",
    img: "https://randomuser.me/api/portraits/men/4.jpg",
  },
];

export const Testimonials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-lg mx-auto">
          <p
            data-aos="fade-up"
            className="text-sm text-primary font-semibold uppercase tracking-wider"
          >
            Lo que dicen nuestros clientes
          </p>
          <h1 data-aos="fade-up" className="text-4xl font-bold text-gray-800 dark:text-white">
            Testimonios
          </h1>
          <p data-aos="fade-up" className="text-sm text-gray-500 dark:text-gray-400">
            Descubre lo que nuestros clientes tienen que decir sobre nosotros.
          </p>
        </div>

        {/* Testimonial Cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {testimonialData.map((testimonial) => (
              <div className="px-4" key={testimonial.id}>
                <div className="flex flex-col items-center shadow-lg py-8 px-6 rounded-xl bg-white dark:bg-gray-800 relative transform transition duration-500 hover:scale-105">
                  <img
                    src={testimonial.img}
                    alt={`Foto de ${testimonial.name}`}
                    className="rounded-full w-24 h-24 mb-4 shadow-md"
                  />
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-center text-sm">
                    {testimonial.text}
                  </p>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h1>
                  <span className="text-primary text-6xl font-serif absolute top-0 right-0 opacity-10">
                    ,,
                  </span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
