import React from "react";
import { FaArrowRight, FaDollarSign } from "react-icons/fa";
import { MdEventAvailable, MdLocationOn } from "react-icons/md";
import { useLoaderData } from "react-router";

const RoommateDetails = () => {
  const user = useLoaderData();
  // console.log(user)
  const {
    _id,
    title,
    location,
    rentAmount,
    description,
    lifestyle,
    availability,
    name,
    contactInfo,
    room,
  } = user;
  // console.log(user);
  return (
    <div>
      <div className="w-[550px] mx-auto rounded-2xl my-10 shadow-xl bg-white hover:shadow-2xl transition-all duration-300 border border-gray-300 py-4 px-8 space-y-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-xl text-green-600 font-semibold flex items-center gap-1">
            <FaDollarSign /> {rentAmount}
          </p>
        </div>

        <div className="flex items-center gap-2 text-lg text-gray-600">
          <MdLocationOn className="text-xl text-red-500" />
          {location}
        </div>

        <div className="flex items-center gap-2 text-lg text-gray-600">
          <MdEventAvailable className="text-xl text-green-500" />
          {availability}
        </div>

        <div className="bg-gray-50 p-4 rounded-lg space-y-2 border">
          <p className="text-gray-700">
            <span className="font-semibold">Lifestyle:</span> {lifestyle}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Room Type:</span> {room}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Description:</span> {description}
          </p>
        </div>

        <div className="border-t pt-4">
          <p className="text-gray-700">
            <span className="font-semibold">Posted By:</span> {name}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Contact:</span> {contactInfo}
          </p>
        </div>

        <div className="flex justify-end">
          <button className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-full font-semibold shadow-md transition-all duration-300">
            ❤️ Like
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoommateDetails;
