import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const ResponsiveSliderPassenger = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="PassengerSwiper"
      >
        <SwiperSlide>
          <video autoPlay loop muted playsInline preload="none" className="">
            <source src="/car.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <span className="text-white block  py-10 text-center text-sm">Complete body</span>
        </SwiperSlide>
        <SwiperSlide>
          <video autoPlay loop muted playsInline preload="none" className="">
            <source src="/Front.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <span className="text-white block  py-10 text-center text-sm">Front</span>
        </SwiperSlide>
        <SwiperSlide>
          <video autoPlay loop muted playsInline preload="none" className="">
            <source src="/interior.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
           <span className="text-white block  py-10 text-center text-sm">Cabin</span>
        </SwiperSlide>
        <SwiperSlide>
          <video autoPlay loop muted playsInline preload="none" className="">
            <source src="/trunk.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
           <span className="text-white block  py-10 text-center text-sm">Trunk</span>
        </SwiperSlide>
        <SwiperSlide>
          <video autoPlay loop muted playsInline preload="none" className="">
            <source src="/Exterior.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
           <span className="text-white block  py-10 text-center text-sm">Exterior</span>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ResponsiveSliderPassenger;
