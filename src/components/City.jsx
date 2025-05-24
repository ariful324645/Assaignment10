import React from "react";
import { motion } from "framer-motion";

const City = ({ city, index }) => {
  const isEven = index % 2 === 0;

  const cardVariants = {
    hidden: { opacity: 0, x: isEven ? 100 : -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={cardVariants}
      transition={{ duration: 0.1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.5 }}
      className="flex flex-col lg:flex-row items-center justify-center gap-8 my-12 px-6 py-8 rounded-xl shadow-lg overflow-hidden bg-gradient-to-r from-indigo-50 via-white to-purple-50 hover:shadow-xl transition-all duration-500"
    >
      {/* Image Section */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className={`w-full lg:w-1/2 ${isEven ? "order-2" : "order-1"}`}
      >
        <img
          src={city.image}
          alt={city.city}
          className="w-full h-72 object-cover rounded-2xl border-4 border-white shadow-md"
        />
      </motion.div>

      {/* Text Content */}
      <motion.div
        whileHover={{ scale: 1.01 }}
        className={`w-full lg:w-1/2 text-center lg:text-left ${
          isEven ? "order-1" : "order-2"
        }`}
      >
        <h2 className="text-4xl font-extrabold text-indigo-800 mb-3">
          {city.name}
        </h2>
        <h3 className="text-2xl font-bold text-indigo-800 mb-3">{city.city}</h3>
        <h3 className="text-xl font-medium text-purple-600 mb-2">
          {city.title}
        </h3>
        <p className="text-gray-700 mb-5 leading-relaxed">{city.description}</p>
        <button className="btn btn-primary hover:scale-105 transition-transform duration-300">
          Explore Listings
        </button>
      </motion.div>
    </motion.div>
  );
};

export default City;
