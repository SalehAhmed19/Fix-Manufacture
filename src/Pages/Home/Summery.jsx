import React from "react";
import card from "../../assets/image/card.jpg";

const Summery = ({ sum }) => {
  return (
    <div>
      <div className="card w-full bg-base-100 shadow-xl image-full">
        <figure>
          <img src={card} alt="Shoes" />
        </figure>
        <div className=" card-body flex items-center justify-center text-white">
          <h2 className="text-center text-3xl font-bold">{sum.summary}</h2>
        </div>
      </div>
    </div>
  );
};

export default Summery;
