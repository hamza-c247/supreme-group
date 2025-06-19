import React from 'react'

const VideoBanner = () => {
  return (
     <div className="relative md:h-screen h-[450px] w-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="none"
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
              <source src="/automotive.mp4" type="video/mp4" />
              <span>Your browser does not support the video tag.</span>
            </video>
            <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
              <h1 className="text-white md:text-5xl text-2xl font-bold drop-shadow-lg text-center px-6">
                <span className="inline-block md:text-2xl font-light md:pb-7 pt-20 text-lg">
                  Driven by performance
                </span>
                <br></br>
                Soft trims and{" "}
                <span className="font-bold text-[#5CD6FF] md:mb-5 inline-block mb-2">
                  NVH solutions
                </span>
                <br></br>
                <span className="font-light">for seamless rides</span>
              </h1>
            </div>
          </div>
  )
}

export default VideoBanner