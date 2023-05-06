import React from "react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay, Navigation, Pagination]);

const Projects = () => {
  const swiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    navigation: true,
    pagination: true,
  };

  const handleImageError = (e: any) => {
    console.error("Error cargando la imagen", e.target.src);
  };

  const swiperContainerStyles = {
    maxWidth: "1100px",
    height: "700px",
    maxHeight: "calc(100vw - 40px)",
  };

  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651a5]">
          Projects
        </p>
        <h2 className="py-4">What I`ve Built</h2>
        <div className="m-auto py-12">
        <div className="bg-gray-100 max-w-screen-lg mx-auto shadow-xl rounded-xl ">
            <div className="shadow-lg rounded-md overflow-hidden">
              <Swiper {...swiperOptions} style={swiperContainerStyles}>
                <SwiperSlide>
                  <img
                    src="/assets/projects/crypto.jpg"
                    alt="Crypto"
                    onError={handleImageError}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/assets/projects/netflix.jpg"
                    alt="Netflix"
                    onError={handleImageError}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/assets/projects/property.jpg"
                    alt="Property"
                    onError={handleImageError}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
