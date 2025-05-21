import React from "react";
import Roommate from "./Roommate";

const FeaturesRoommmates = ({ roommates }) => {
  // console.log(roommates);

  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="grid grid-cols-3 gap-8">
        {roommates.map((roommate) => (
          <Roommate key={roommate._id} roommate={roommate}></Roommate>
        ))}
      </div>
    </div>
  );
};

export default FeaturesRoommmates;
