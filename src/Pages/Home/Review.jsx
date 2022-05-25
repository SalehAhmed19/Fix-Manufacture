import React from "react";

const Review = ({ review }) => {
  return (
    <div className="items-center border my-3 p-5 w-full rounded-md mx-auto">
      <div className="ml-5">
        <h4 className="text-primary text-xl font-bold">{review.name}</h4>
        <p className="text-secondary font-bold">
          <small>{review.email}</small>
        </p>
        <p className="text-orange-500 font-bold">Ratings: {review.ratings}</p>
        <p className="text-secondary">
          <span className="font-bold">Review: </span>
          {review.review}
        </p>
      </div>
    </div>
  );
};

export default Review;
