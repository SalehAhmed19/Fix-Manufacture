import React from "react";
import bg from "../../assets/image/bg.png";

const Summery = ({ sum }) => {
  return (
    <div
      style={{ background: `url(${bg})`, backgroundSize: "cover" }}
      className="flex flex-col justify-center items-center p-3"
    >
      {sum.icon}
      <h2 className="text-2xl font-bold">{sum.summary}</h2>
    </div>
  );
};
export default Summery;
