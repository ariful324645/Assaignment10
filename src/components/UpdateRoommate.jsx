import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateRoommate = () => {
  const {
    availability,
    contactInfo,
    description,
    email,
    lifestyle,
    location,

    rentAmount,
    room,
    title,
    _id,
  } = useLoaderData();

  const handleUpdateRoommate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedRoommate = Object.fromEntries(formData.entries());
    // console.log(updatedRoommate);
    fetch(`https://roommate-finder-server-one.vercel.app/roommates/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedRoommate),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Roommate Updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        // console.log(data);
      });
  };
  return (
    <div className="w-9/12 mx-auto py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-2xl text-blue-600 font-bold"> Update Roommate</h1>
      </div>
      <form onSubmit={handleUpdateRoommate}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
            <label className="label text-xl font-semibold">Title</label>
            <input
              type="text"
              name="title"
              defaultValue={title}
              className="input w-full"
              placeholder="Tittle"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-xl font-semibold">Location</label>
            <input
              type="text"
              name="location"
              defaultValue={location}
              className="input w-full"
              placeholder="Location"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-xl font-semibold">Rent Amount</label>
            <input
              type="text"
              name="rentAmount"
              defaultValue={rentAmount}
              className="input w-full"
              placeholder="amount"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-xl font-semibold">Room </label>
            <select
              name="room"
              className="select w-full"
              defaultValue={room}
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
              defaultValue={lifestyle}
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
              defaultValue={description}
              className="input w-full"
              placeholder="Description"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-xl font-semibold">Contact Info</label>
            <input
              type="text"
              name="contactInfo"
              defaultValue={contactInfo}
              className="input w-full"
              placeholder="contactInfo"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-xl font-semibold">Availability </label>
            <select
              name="availability"
              className="select w-full"
              defaultValue={availability}
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
              defaultValue={email}
              className="input w-full"
              placeholder="email"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-xl font-semibold">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={email}
              className="input w-full"
              placeholder="name"
            />
          </fieldset>
        </div>

        <button
          type="submit"
          className="btn btn-info text-xl font-semibold mt-6 w-full"
        >
          Update Roommate
        </button>
      </form>
    </div>
  );
};

export default UpdateRoommate;
