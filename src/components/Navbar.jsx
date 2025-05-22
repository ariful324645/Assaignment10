import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { FaArrowRight } from "react-icons/fa";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, LogOut } = use(AuthContext);
  const handleLogOut = () => {
    LogOut()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "LogOut successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="bg-base-300 ">
      <div className="navbar w-11/12 mx-auto ">
        <div className="navbar-start">
          <div className="">
            <img
              className="w-[50px] h-[50px] rounded-full"
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

        {user ? (
          <div className="navbar-end flex items-center gap-5">
            <div className="tooltip text-blue-500 tooltip-bottom" data-tip={user.displayName}>
              <img
                src={user.photoURL}
                alt="User Profile"
                className="w-10 h-10  rounded-full object-cover border-2 border-secondary"
              />
            </div>

            <button
              onClick={handleLogOut}
              className="btn btn-secondary flex items-center gap-2"
            >
              LogOut <FaArrowRight />
            </button>
          </div>
        ) : (
          <div className="navbar-end flex gap-5">
            <Link to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn btn-secondary">SignUp</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
