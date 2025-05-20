import React from "react";

const FindRoommate = () => {
  const handleAddRoommate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData=new FormData(form)
    const newRoommate=Object.fromEntries(formData.entries())
    console.log(newRoommate)

    fetch("http://localhost:3000/roommates", {
                method:'POST',
                headers:{
                                "content-type":"application/json"
                },
                body:JSON.stringify(newRoommate)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after adding Roommate",data);
      });
  };
  return (
    <div className="w-11/12 mx-auto py-8 space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold"> Find Roommate</h1>
        <p>
          Our platform connects you with like-minded individuals who are also
          searching for a comfortable and respectful living arrangement. Whether
          you're a student, young professional, or someone new to the city,
          easily browse profiles, compare preferences, and match with potential
          roommates based on lifestyle, budget, and location.
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
              <option value="" disabled>
                Select room type
              </option>
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
              <option value="" disabled>
                Life Style Preference
              </option>
              <option value="pets">Pets</option>
              <option value="smoking">Smoking</option>
              <option value="LifeStyle"> LifeStyle</option>
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
              name="contact-into"
              className="input w-full"
              placeholder="contact info"
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
              <option value="" disabled>
                Availability
              </option>
              <option value="Single">Availability</option>
              <option value="Shared">Not Availability</option>
            </select>
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-xl font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="email"
            />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label text-xl font-semibold">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="name"
            />
          </fieldset>
        </div>
        <button type="submit" className="btn text-xl font-semibold mt-6 w-full">
          Add Roommate
        </button>
      </form>
    </div>
  );
};

export default FindRoommate;
