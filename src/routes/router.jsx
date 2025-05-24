import { createBrowserRouter } from "react-router";
import Mainlayout from "../pages/Mainlayout";
import Home from "../pages/Home";

import BrowseListings from "../pages/BrowseListings";
import Error from "../components/Error";

import Login from "../components/Login";
import Register from "../components/Register";
import Hero from "../components/Hero";
import FeaturesRoommmates from "../components/FeaturesRoommmates";

import RoommateTips from "../components/RoommateTips";
import TopCities from "../components/TopCities";
import FindRoommate from "../pages/FindRoommate";
import PrivateRoute from "./PrivateRoute";
import MyListings from "../pages/MyListings";
import RoommateDetails from "../components/RoommateDetails";
import UpdateRoommate from "../components/UpdateRoommate";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        loader: () =>
          fetch(
            "https://roommate-finder-server-one.vercel.app/top-six-roommate"
          ),
        hydrateFallbackElement: (
          <div className="flex text-center items-center justify-center mt-46">
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
        Component: Home,
      },
      {
        path: "/browseListings",
        loader: () =>
          fetch("https://roommate-finder-server-one.vercel.app/roommates"),
        hydrateFallbackElement: (
          <div className="flex text-center items-center justify-center mt-52">
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
        Component: BrowseListings,
      },
      {
        path: "/myListings",
        // loader: ({ params }) =>
        //   fetch(`https://roommate-finder-server-one.vercel.app/my-listing/${params.id}`),
        // hydrateFallbackElement: (
        //   <div className="flex text-center items-center justify-center mt-52">
        //     <span className="loading loading-bars loading-md"></span>
        //     <span className="loading loading-bars loading-lg"></span>
        //     <span className="loading loading-bars loading-xl"></span>
        //   </div>
        // ),
        element: (
          <PrivateRoute>
            <MyListings></MyListings>
          </PrivateRoute>
        ),
      },
      {
        path: "/findRoommate",
        element: (
          <PrivateRoute>
            <FindRoommate></FindRoommate>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/hero",
        Component: Hero,
      },

      {
        path: "/featuresRoommates",

        Component: FeaturesRoommmates,
      },
      {
        path: "/roomDetails/:id",
        loader: ({ params }) =>
          fetch(
            `https://roommate-finder-server-one.vercel.app/roommates/${params.id}`
          ),
        hydrateFallbackElement: (
          <div className="flex text-center items-center justify-center mt-52">
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
        element: (
          <PrivateRoute>
            <RoommateDetails></RoommateDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "updateRoommate/:id",
        loader: ({ params }) =>
          fetch(
            `https://roommate-finder-server-one.vercel.app/roommates/${params.id}`
          ),
        hydrateFallbackElement: (
          <div className="flex text-center items-center justify-center mt-52">
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
            <span className="loading loading-bars loading-xl"></span>
          </div>
        ),
        element: (
          <PrivateRoute>
            <UpdateRoommate></UpdateRoommate>
          </PrivateRoute>
        ),
      },
      {
        path: "/roommateTips",
        Component: RoommateTips,
      },
      {
        path: "/topCities",
        Component: TopCities,
      },
    ],
  },
]);
export default router;
