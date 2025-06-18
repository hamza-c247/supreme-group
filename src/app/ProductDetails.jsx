import { useState } from "react";
import ResponsiveSliderPassenger from "./ResponsiveSliderPassenger";
import ResponsiveSliderCommercial from "./ResponsiveSliderCommercial";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import SwiperTruck from "./SwiperTruck";

const ProductDetails = () => {
  const tabs = [
    {
      title: "Passenger vehicles",
      content: "Revving up innovation from interior to exterior",
    },
    {
      title: "Commercial vehicles",
      content: "Advancing engineering for heavy-duty vehicles.",
    },
  ];
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [activeTab, setActiveTab] = useState("Passenger vehicles");

  return (
    <section className="w-full   bg-black py-12 px-4 ">
      <div className="w-full   overflow-hidden">
        <div className="sticky top-0 z-20  px-6 py-4 ">
          <h2 className=" text-white text-center  md:pt-80 md:pb-20 pb-10 sm:pt-20 md:text-[48px] text-[24px] ">
            Evolving the drive with{" "}
            <span className="font-bold md:mb-4 inline-block">360-degree</span>
            <br className="md:block hidden"></br>
            comprehensive solutions
          </h2>
        </div>

        <div className="md:hidden block">
          <span className="text-[#5CD6FF] block text-center text-xl py-6">
            Passenger vehicles
          </span>
          <span className="text-white text-center block pb-10 text-sm">
            Revving up innovation <br></br> from interior to exterior
          </span>
          <ResponsiveSliderPassenger />
        </div>

        <div className="md:hidden block">
          <span className="text-[#5CD6FF] block text-center text-xl py-6">
            Commercial vehicles
          </span>
          <span className="text-white text-center block pb-10 text-sm">
            Advancing engineering<br></br> for heavy-duty vehicles.
          </span>
          <ResponsiveSliderCommercial />
        </div>

        <div className="md:flex lg:flex hidden flex flex-col md:flex-row justify-around ml-[4%] ">
          {/* Tabs List */}
          <div className="w-full h-full md:w-1/4   p-4 space-y-3">
            {tabs?.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab.title)}
                className={`w-full text-left px-4 py-2  font-medium transition-all ${
                  activeTab === tab.title
                    ? " text-white font-semibold border-l-4 py-6 border-white"
                    : "text-gray-700 "
                }`}
              >
                <h3 className="text-3xl pl-15 whitespace-nowrap ">
                  {tab.title}
                </h3>
                <h6 className="text-lg pl-15 pt-5">{tab.content}</h6>
                {console.log(activeTab, "act")}
              </button>
            ))}
          </div>
          {/* Tab Content */}S
          <div className=" md:w-[900px] md:h-auto p-6 ">
            <div
              className={`${
                activeTab === "Passenger vehicles" ? "block" : "hidden"
              }`}
            >
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
                  <video autoPlay loop muted playsInline className="">
                    <source src="/car.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </SwiperSlide>
                <SwiperSlide>
                  <video autoPlay loop muted playsInline className="">
                    <source src="/Front.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </SwiperSlide>
                <SwiperSlide>
                  <video autoPlay loop muted playsInline className="">
                    <source src="/interior.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </SwiperSlide>
                <SwiperSlide>
                  <video autoPlay loop muted playsInline className="">
                    <source src="/trunk.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </SwiperSlide>
                <SwiperSlide>
                  <video autoPlay loop muted playsInline className="">
                    <source src="/Exterior.mp4" type="video/mp4" />
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
                  <img
                    className="opacity-50 hover:opacity-100 cursor-pointer h-20"
                    src="/cabin.png"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="opacity-50 hover:opacity-100 cursor-pointer h-20"
                    src="/view 1.png"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="opacity-50 hover:opacity-100 cursor-pointer h-20"
                    src="/view 2.png"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="opacity-50 hover:opacity-100 cursor-pointer h-20"
                    src="/view 3.png"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    className="opacity-50 hover:opacity-100 cursor-pointer h-20"
                    src="/view 1.png"
                  />
                </SwiperSlide>
              </Swiper>
            </div>

            <div
              className={`${
                activeTab === "Commercial vehicles" ? "block" : "hidden"
              }`}
            >
              <SwiperTruck />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
