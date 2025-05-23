import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Mainlayout = () => {
  return (
    <div>
      <div className="sticky z-[1000] top-0 ">
        <Navbar></Navbar>
      </div>

      <div className="-z-50">
        {" "}
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Mainlayout;
