import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import MyList from "../components/MyList";
import { RxUpdate } from "react-icons/rx";
import { MdDeleteOutline } from "react-icons/md";

const MyListings = () => {
  const { user } = use(AuthContext);
  const [myListings, setMylistings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/my-listing/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMylistings(data);
      });
  }, [user.email]);

  console.log(myListings);

  return (
    <div className="min-h-screen mt-16 bg-gray-50 py-10">
      <h1 className="text-blue-500 text-3xl font-bold text-center mb-6 drop-shadow-md">
        🏠 My Roommate Listings
      </h1>

      <div className="overflow-x-auto w-11/12 mx-auto bg-white shadow-lg rounded-xl border border-gray-200">
        <table className="table w-full text-sm text-gray-700">
          {/* head */}
          <thead className="bg-blue-100 text-blue-900 text-base">
            <tr>
              <th className="py-3 px-4 border-b border-blue-200">SL</th>
              <th className="py-3 px-4 border-b border-blue-200">Name</th>
              <th className="py-3 px-4 border-b border-blue-200">Location</th>
              <th className="py-3 px-4 border-b border-blue-200">
                Rent Amount
              </th>
              <th className="py-3 px-4 border-b border-blue-200">Room Type</th>
              <th className="py-3 px-4 border-b border-blue-200">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {myListings.map((mylist, index) => (
              <tr
                key={index}
                className="hover:bg-blue-50 transition duration-150"
              >
                <td className="py-2 px-4 text-center">{index + 1}</td>
                <td className="py-2 px-4">{mylist.name}</td>
                <td className="py-2 px-4">{mylist.location}</td>
                <td className="py-2 px-4">${mylist.rentAmount}</td>
                <td className="py-2 px-4">{mylist.room}</td>
                <td className="py-2 px-4">
                  <div className="flex gap-2 ">
                    <button className="btn btn-sm btn-info rounded-md">
                      <RxUpdate className="mr-1" />
                      Update
                    </button>
                    <button className="btn btn-sm btn-error rounded-md">
                      <MdDeleteOutline className="mr-1" />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyListings;
