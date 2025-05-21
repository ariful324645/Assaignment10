import React from "react";
import { FaArrowRight, FaDollarSign } from "react-icons/fa";
import { MdEventAvailable, MdLocationOn } from "react-icons/md";

const Roommate = ({ roommate }) => {
  console.log(roommate);
  const { title, location, rentAmount, description, availability } = roommate;
  return (
    <div className="">
      <div className="card bg-gradient-to-r from-cyan-100 to-blue-100 card-md shadow-sm">
        <div className="card-body">
          <h1 className="text-2xl font-semibold"> {title}</h1>
          <p className="text-xl flex gap-2 items-center">
            <FaDollarSign />
            {rentAmount}
          </p>
          <p className="text-xl flex gap-2 items-center">
            <MdLocationOn />
            {location}
          </p>
          <p className="text-xl flex gap-2 items-center">
            <MdEventAvailable />
            {availability}
          </p>
          <p className="text-xl"> {description}</p>
          <div className=" card-actions ">
            <div className="space-x-11">
              <button className="btn btn-primary">
                See More <FaArrowRight />
              </button>
              <button class="btn btn-secondary">Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roommate;
