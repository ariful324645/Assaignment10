import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Slide data
const slides = [
  {
    image: "https://i.ibb.co/KxgNPrRg/99z-2206-w009-n001-150b-p14-150.jpg",
    title: "Match with compatible roommates based on preferences",
    description: "Smart roommate matching for better shared living.",
    location: "London, UK",
  },
  {
    image: "https://i.ibb.co/pvDv1xyG/2208-w023-n003-2794b-p1-2794.jpg",
    title: " Spot your perfect roommate match quickly and easily",
    description: "Find trusted roommates quickly and easily",
    location: "Tokyo, Japan",
  },
  {
    image: "https://i.ibb.co/RGqFmtw1/43084.jpg",
    title: "Find people to share your living space and lifestyle",
    description:
      "Match with the perfect roommate based on lifestyle and location.",
    location: "Tokyo, Japan",
  },
];

const Hero = () => {
  return (
    <div className="w-11/12  h-80 mt-5 mb-30  mx-auto px-4 ">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              {/* Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
              />

              {/* Overlay */}
              <div className="absolute top-0 left-0 bg-black opacity-60 w-full h-full  z-10"></div>

              {/* Text content */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center text-white px-4">
                <h2 className="text-3xl font-bold mb-2">{slide.title}</h2>
                <p className="mb-1">{slide.description}</p>
                <p className="text-sm text-gray-300">
                  <strong>Location:</strong> {slide.location}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
