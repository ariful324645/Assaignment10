import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router";
import { div } from "framer-motion/client";

const PrivateRoute = ({ children }) => {
  const { user,loading } = use(AuthContext);
  console.log(user);
  if (user && user?.email) {
    return children;
  }
  return (
    <div>
      <Navigate to="/login"></Navigate>
      
    </div>
  );
  
};

export default PrivateRoute;
