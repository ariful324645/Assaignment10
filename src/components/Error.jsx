import React from "react";
import errorImg from "../assets/5203299.jpg";

const Error = () => {
  return (
    <div className="flex items-center mt-4 justify-center">
      <img className="w-[800px] h-[700px] object-cover" src={errorImg} alt="Error" />
    </div>
  );
};

export default Error;
