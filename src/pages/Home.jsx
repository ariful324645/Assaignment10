import React from "react";
import Hero from "../components/Hero";
import FeaturesRoommmates from "../components/FeaturesRoommmates";
import { useLoaderData } from "react-router";

const Home = () => {
  const roommates = useLoaderData();
  console.log(roommates);

  return (
    <div>
      <Hero></Hero>
      <FeaturesRoommmates roommates={roommates}></FeaturesRoommmates>
    </div>
  );
};

export default Home;
