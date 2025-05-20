import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="bg-base-200 py-1">
      <div className="navbar w-11/12 mx-auto ">
        <div className="navbar-start">
          <div className="">
            <img
              className="w-[80px] h-[80px] rounded-full"
              src="https://i.ibb.co/VRXG3SF/24650-1.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="navbar-center  gap-5 hidden lg:flex">
          <ul className="flex gap-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold underline" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold underline" : ""
              }
              to="/browseListings"
            >
              <li>BrowseListings</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold underline" : ""
              }
              to="/myListings"
            >
              <li>MYListings</li>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold underline" : ""
              }
              to="/findRoommate"
            >
              <li>FindRoommate</li>
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end flex gap-5">
          <Link to="/login">
            <button className="btn btn-primary">Login</button>
          </Link>
          <Link to="/register">
        
            <button className="btn btn-secondary">SignUp</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
