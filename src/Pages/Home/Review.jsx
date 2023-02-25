import { Rating } from "@mui/material";
import React from "react";
import { FaQuoteLeft, FaUserCircle } from "react-icons/fa";
import triangle from "../../assets/Gifs/triangle.png";

const Review = ({ review }) => {
  return (
    <div className="shadow-lg p-5">
      <div className="p-10 bg-[#FDBF04] flex shadow-lg rounded-md">
        <FaQuoteLeft className="mx-3" />
        <h3>{review.review}</h3>
      </div>
      <img className="w-4 ml-3" src={triangle} alt="" />
      <div>
        <div className="flex items-center">
          <FaUserCircle className="mr-2" />
          <h3 className="font-bold">{review.name}</h3>
        </div>
        <Rating name="read-only" value={review.ratings} readOnly />
        <p>
          <small>{review.email}</small>
        </p>
      </div>
    </div>
  );
};

export default Review;
