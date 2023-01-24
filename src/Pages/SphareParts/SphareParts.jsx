import React from "react";
import useParts from "../../Hooks/useParts";
import Parts from "../Home/Parts";
import SparePart from "./SparePart";

const SphareParts = () => {
  const [parts, setParts] = useParts();
  return (
    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-secondary text-center my-8">
        All Spare Parts
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-20">
        {parts.map((part) => (
          <SparePart key={part._id} part={part}></SparePart>
        ))}
      </div>
    </div>
  );
};

export default SphareParts;
