import React, { useState } from "react";
import { FaArrowRight, FaDollarSign } from "react-icons/fa";
import { MdEventAvailable, MdLocationOn } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const Roommate = ({ roommate }) => {
  const { _id, title, location, rentAmount, description, availability } =
    roommate;

  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://roommate-finder-server-one.vercel.app/roommates/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire(
                "Deleted!",
                "Your Roommate has been deleted.",
                "success"
              );
              setIsDeleted(true);
            }
          });
      }
    });
  };

  if (isDeleted) return null;

  return (
    <div className="card  bg-white text- card-md shadow-sm">
      <div className="card-body space-y-3">
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="flex items-center">
          {" "}
          Price:
          <FaDollarSign />
          {rentAmount}
        </p>
        <p className="flex items-center ">
          {" "}
          Location:
          <MdLocationOn />
          {location}
        </p>
        <p className="text-sm flex items-center ">
          <MdEventAvailable />
          {availability}
        </p>
        <p className="text-sm">{description}</p>
        <div className="card-actions">
          <div className="space-x-11">
            <Link to={`/roomDetails/${_id}`}>
              {" "}
              <button className="btn btn-primary">
                See More <FaArrowRight />
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-secondary"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roommate;
