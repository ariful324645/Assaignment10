import { createBrowserRouter } from "react-router";
import Mainlayout from "../pages/Mainlayout";
import Home from "../pages/Home";

import BrowseListings from "../pages/BrowseListings";
import Error from "../components/Error";
import MyListings from "../pages/MyListings";
import FindRoommate from "../pages/FindRoommate";
import Login from "../components/Login";
import Register from "../components/Register";
import Hero from "../components/Hero";
import FeaturesRoommmates from "../components/FeaturesRoommmates";



const router = createBrowserRouter([
  {
    path: "/",
    Component: Mainlayout,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("http://localhost:3000/top-six-roommate"),
        Component: Home,
      },
      {
        path: "/browseListings",
        loader: () => fetch("http://localhost:3000/roommates"),
        Component: BrowseListings,
      },
      {
        path: "/myListings",
        Component: MyListings,
      },
      {
        path: "/findRoommate",
        Component: FindRoommate,
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
    ],
  },
]);
export default router;
