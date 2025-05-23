import React, { useEffect, useState } from "react";
import City from "./City";

const TopCities = () => {
  const [cities, setCities] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch("./cities.json")
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, []);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cities.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [cities]);

  return (
    <div className="w-full max-w-5xl mx-auto mt-12">
      <h1 className="text-3xl font-bold  text-center ">
        🏙️ Top Cities Roommate
      </h1>
      {cities.length > 0 && <City city={cities[current]} index={current} />}
    </div>
  );
};

export default TopCities;
