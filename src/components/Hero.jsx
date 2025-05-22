import React from "react";

const Hero = () => {
  const carouselData = [
    {
      id: 1,
      title: "Cozy Room in Brooklyn Apartment",
      image:
        "https://i.ibb.co/nNR9RCTH/student-dormitory-flat-background-with-young-girls-living-room-welcoming-new-member-team-vector-illu.jpg",
      location: "Brooklyn, New York",
      rent: 950,
      availability: "Available",
      roomType: "Single",
    },
    {
      id: 2,
      title: "Shared Room in Downtown LA",
      image: "https://i.ibb.co/XCpH6FL/room2.jpg",
      location: "Los Angeles, California",
      rent: 650,
      availability: "Available",
      roomType: "Shared",
    },
    {
      id: 3,
      title: "Luxury Room with City View",
      image: "https://i.ibb.co/q70nKk2/room3.jpg",
      location: "Chicago, Illinois",
      rent: 1200,
      availability: "Not Available",
      roomType: "Single",
    },
    {
      id: 4,
      title: "Budget-Friendly Room in Queens",
      image: "https://i.ibb.co/MV2B9DF/room4.jpg",
      location: "Queens, New York",
      rent: 700,
      availability: "Available",
      roomType: "Shared",
    },
    {
      id: 5,
      title: "Spacious Room for Students",
      image: "https://i.ibb.co/5Lfd43y/room5.jpg",
      location: "Austin, Texas",
      rent: 550,
      availability: "Available",
      roomType: "Single",
    },
    {
      id: 6,
      title: "Furnished Room Near University",
      image: "https://i.ibb.co/Jkhhd4B/room6.jpg",
      location: "Boston, Massachusetts",
      rent: 800,
      availability: "Available",
      roomType: "Single",
    },
  ];
  return (
    <div>
      <div className=" w-11/12  mx-auto">
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
              <div className="absolute flex flex-col justify-end bg-black bg-opacity-40 w-full h-full text-white p-5">
                <h2 className="text-2xl font-bold">{item.title}</h2>
                <p>📍 {item.location}</p>
                <p>💰 Rent: ${item.rent}</p>
                <p>🏠 Type: {item.roomType}</p>
                <p>✅ Availability: {item.availability}</p>
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
    </div>
  );
};

export default Hero;
