import React from "react";
import useParts from "../../Hooks/useParts";
import Part from "./Part";
import { Pulse, Fade, Zoom } from "react-reveal";

const Parts = () => {
  const [parts, setParts] = useParts();
  return (
    <div className="my-10 mx-10">
      <Fade left>
        <div className="flex items-end">
          <h2 className="font-bold text-2xl text-[#FEC002]">Feature Product</h2>
          <Fade forever={true}>
            <div className="bg-[#FEC002] h-1 w-20 rounded-full"></div>
          </Fade>
        </div>
        <h2 className="font-bold text-5xl my-5 text-[#000]">
          Parts For All Model
        </h2>
      </Fade>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
        {parts
          .reverse()
          .slice(0, 6)
          .map((part) => (
            <Zoom>
              <Part key={part._id} part={part}></Part>
            </Zoom>
          ))}
      </div>
    </div>
  );
};

export default Parts;
