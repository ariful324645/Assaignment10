import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Mainlayout = () => {
  return (
    <div className=" bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className=" ">
        <Navbar></Navbar>
      </div>

      <div>
        {" "}
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Mainlayout;
