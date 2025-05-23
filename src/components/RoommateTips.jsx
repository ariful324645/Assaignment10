import React, { useEffect, useState } from "react";
import Tip from "./Tip";


const RoommateTips = () => {
  const [tips, setTips] = useState([]);
  console.log(tips);
  useEffect(() => {
    fetch("./tips.json")
      .then((res) => res.json())
      .then((data) => setTips(data));
  }, []);
  return (
    <div className="w-11/12 mx-auto my-3">
      <h1 className="font-bold text-3xl text-center mb-4 ">Roommates tips & Guides</h1>
      <p className="w-4/6 mx-auto text-center mb-6">
        Discover helpful tips and practical guides for living with roommates —
        from setting boundaries and managing shared expenses to creating a
        comfortable and respectful home environment. Make your shared living
        experience smooth and stress-free.
      </p>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
        {tips.map((tip) => (
          <Tip key={tip.id} tip={tip}></Tip>
        ))}
      </div>
    </div>
  );

  
  
};

export default RoommateTips;
