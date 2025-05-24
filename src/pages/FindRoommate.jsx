import React, { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const FindRoommate = () => {
  const{user}=use(AuthContext)
  const handleAddRoommate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData=new FormData(form)
    const newRoommate=Object.fromEntries(formData.entries())
    // console.log(newRoommate)

    fetch("https://roommate-finder-server-one.vercel.app/roommates", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newRoommate),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("after adding Roommate", data);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Roommate added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="w-9/12 mx-auto py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-2xl text-blue-600 font-bold"> Find Roommate</h1>
        <p className="font-sm w-3/4 mx-auto font-semibold ">
          Our platform connects you with like-minded individuals who are also
          searching for a comfortable and respectful living arrangement. Whether
          you're a student, young professional, or someone new to the city.
       
        </p>
      </div>
      <form onSubmit={handleAddRoommate}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label text-xl font-semibold">Title</label>
            <input
              type="text"
              name="title"
              className="input w-full"
              placeholder="Tittle"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-xl font-semibold">Location</label>
            <input
              type="text"
              name="location"
              className="input w-full"
              placeholder="Location"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-xl font-semibold">Rent Amount</label>
            <input
              type="text"
              name="rentAmount"
              className="input w-full"
              placeholder="amount"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-xl font-semibold">Room </label>
            <select
              name="room"
              className="select w-full"
              defaultValue=""
              required
            >
              <option value="Single">Single</option>
              <option value="Shared">Shared</option>
            </select>
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-xl font-semibold">
              Lifestyle Preferences{" "}
            </label>
            <select
              name="lifestyle"
              className="select w-full"
              defaultValue=""
              required
            >
              <option value="pets">Pets</option>
              <option value="smoking">Smoking</option>
              <option value="life style"> LifeStyle</option>
            </select>
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-xl font-semibold">Description</label>
            <input
              type="text"
              name="description"
              className="input w-full"
              placeholder="Description"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-xl font-semibold">Contact Info</label>
            <input
              type="text"
              name="contactInfo"
              className="input w-full"
              placeholder="contactInfo"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-xl font-semibold">Availability </label>
            <select
              name="availability"
              className="select w-full"
              defaultValue=""
              required
            >
              <option value="available">Available</option>
              <option value="not available">Not available</option>
            </select>
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-xl font-semibold">Email</label>
            <input
              type="email"
              name="email"
              defaultValue={user.email}
              readOnly
              className="input w-full"
              placeholder="email"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-xl font-semibold">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={user.displayName}
              readOnly
              className="input w-full"
              placeholder="name"
            />
          </fieldset>
        </div>
       
        <button type="submit" className="btn btn-info text-xl font-semibold mt-6 w-full">
          Add Roommate
        </button>
      </form>
    </div>
  );
};

export default FindRoommate;
