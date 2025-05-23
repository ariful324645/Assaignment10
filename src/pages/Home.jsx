import React from "react";
import Hero from "../components/Hero";
import FeaturesRoommmates from "../components/FeaturesRoommmates";
import { useLoaderData } from "react-router";
import RoommateTips from "../components/RoommateTips";
import TopCities from "../components/TopCities";

const Home = () => {
  const roommates = useLoaderData();
  // console.log(roommates);
  


  return (
    <div>
      <Hero></Hero>
      <FeaturesRoommmates roommates={roommates}></FeaturesRoommmates>

      <RoommateTips></RoommateTips>
      <TopCities></TopCities>
    </div>
  );
};

export default Home;
