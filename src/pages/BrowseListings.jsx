import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useLoaderData } from "react-router";

const BrowseListings = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);
  console.log(initialUsers);
  return (
    <div className="w-11/12 mx-auto my-10">
      <h1 className="text-2xl font-bold text-center mb-5 text-blue-500">
        ALL Roommate List
      </h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="">
            <tr>
              <th className="text-lg">SL</th>
              <th className="text-lg">Title</th>
             
             
             
              <th className="text-lg">Location</th>
              <th className="text-lg">Rent Amount</th>
              <th className="text-lg">Room type</th>
              <th className="text-lg">Availability</th>
              <th className="text-lg">Actions</th>
             
            </tr>
          </thead>
          <tbody className="bg-gradient-to-br from-indigo-100 via-white to-cyan-100 text-gray-800">
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.title}</td>
              
                <td>{user.location}</td>
                <td>{user.rentAmount}</td>
                <td>{user.room}</td>
                <td
                  className={
                    user.availability === "available"
                      ? "text-blue-500"
                      : "text-red-400"
                  }
                >
                  {user.availability}
                </td>
                <td>
                  <button className="btn btn-primary rounded-full">
                    See More <FaArrowRight />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseListings;
