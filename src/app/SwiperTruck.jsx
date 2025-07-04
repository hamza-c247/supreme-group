import React from "react";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import View1 from "../../public/view 1.png";
import View2 from "../../public/view 2.png";
import View3 from "../../public/view 3.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const SwiperTruck = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <video autoPlay loop muted playsInline preload="none" className="h-80">
            <source src="/Commercial1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <video autoPlay loop muted playsInline preload="none" className="">
            <source src="/Commercial2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <video autoPlay loop muted playsInline preload="none" className="">
            <source src="/Commercial3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            className="opacity-50 hover:opacity-100 cursor-pointer h-20"
            src={View3}
            alt="View3"
            height="auto"
            width="auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="opacity-50 hover:opacity-100 cursor-pointer h-20"
            src={View2}
            alt="View2"
            height="auto"
            width="auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className="opacity-50 hover:opacity-100 cursor-pointer h-20"
            src={View1}
            alt="View1"
            height="auto"
            width="auto"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperTruck;
