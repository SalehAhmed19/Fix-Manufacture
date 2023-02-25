import React from "react";
import useParts from "../../Hooks/useParts";
import Part from "./Part";

const Parts = () => {
  const [parts, setParts] = useParts();
  return (
    <div className="my-10">
      <h2 className="text-center font-bold text-3xl text-[#FEC002]">Parts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto my-5">
        {parts
          .reverse()
          .slice(0, 6)
          .map((part) => (
            <Part key={part._id} part={part}></Part>
          ))}
      </div>
    </div>
  );
};

export default Parts;
