import React from "react";

const Tip = ({ tip }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="relative">
        <img
          className="w-full h-64 object-cover rounded-t-xl"
          src={tip.image}
          alt={tip.title}
        />
        {/* Overlay with linear gradient and opacity */}
        <div className="absolute inset-0 rounded-t-xl bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end p-4">
          <h2 className="text-white text-2xl font-bold drop-shadow-md">
            {tip.title}
          </h2>
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">
          By{" "}
          <span className="font-semibold text-gray-700">{tip.authorName}</span>{" "}
          on {tip.date}
        </p>
        <p className="text-gray-700 mb-4 line-clamp-3">{tip.description}</p>
        <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Tip;
