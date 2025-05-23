import React from "react";

const Hero = () => {
  const carouselData = [
    {
      id: 1,
      title: "Cozy Room in Brooklyn Apartment",
      image: "https://i.ibb.co/pvDv1xyG/2208-w023-n003-2794b-p1-2794.jpg",
      location: "Brooklyn, New York",
      description:
        "A quiet, well-lit room perfect for students or remote workers.",
    },
    {
      id: 2,
      title: "Shared Room in Downtown LA",
      image: "https://i.ibb.co/KxgNPrRg/99z-2206-w009-n001-150b-p14-150.jpg",
      location: "Los Angeles, California",
      description: "Affordable shared space in a lively downtown location.",
    },

    {
      id: 3,
      title: "Spacious Room for Students",
      image:
        "https://i.ibb.co/tPFFvt2K/2305-i605-046-F-m005-c9-student-dormitory-color-set.jpg",
      location: "Austin, Texas",
      description:
        "Ideal for students, with easy access to campus and transit.",
    },
    {
      id: 4,
      title: "Furnished Room Near University",
      image: "https://i.ibb.co/RGqFmtw1/43084.jpg",
      location: "Boston, Massachusetts",
      description:
        "Fully furnished room within walking distance of the university.",
    },
  ];
  

  return (
    <div className="w-11/12 mt-5 mx-auto">
      <div className="carousel w-full">
        {carouselData.map((item, index) => (
          <div
            id={`slide${index}`}
            key={item.id}
            className="carousel-item relative w-full"
          >
            <img
              src={item.image}
              className="w-full h-[400px] object-cover rounded-lg"
              alt={item.title}
            />
            <div className="absolute flex flex-col justify-end  w-full h-full text-white p-5">
              <h2 className="text-2xl font-bold">{item.title}</h2>
              <p>📍 {item.location}</p>
              <p>{item.description}</p>
             
              <div className="mt-2">
                <a
                  href={`#slide${(index + 1) % carouselData.length}`}
                  className="btn btn-sm mr-2"
                >
                  Next
                </a>
                <a
                  href={`#slide${
                    (index - 1 + carouselData.length) % carouselData.length
                  }`}
                  className="btn btn-sm"
                >
                  Prev
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
