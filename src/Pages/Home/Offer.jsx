import React from "react";
import Fade from "react-reveal/Fade";

const Offer = () => {
  const data = [
    { _id: 1, value: 69, context: "Day" },
    { _id: 2, value: 13, context: "Hour" },
    { _id: 3, value: 56, context: "Minute" },
    { _id: 4, value: 46, context: "Second" },
  ];
  return (
    <Fade up>
      <div className="bg-[#000] py-20 px-5">
        <h2 className="text-center font-bold text-4xl text-[#fff]">
          Attention! <span className="text-[#FEC002]">Flash Sales</span>
        </h2>
        <p className="text-center text-xl my-4 text-[#fff]">
          Hurry up! Discount up to 70%
        </p>
        <div className="flex flex-col lg:flex-row justify-between w-1/3 mx-auto">
          {data.map((d) => (
            <div className="bg-[#FEC002] w-20 h-20 flex flex-col justify-center items-center rounded-md m-3">
              <h3 className="text-3xl text-[#000] font-bold">{d.value}</h3>
              <p className="text-[#000]">{d.context}</p>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default Offer;
