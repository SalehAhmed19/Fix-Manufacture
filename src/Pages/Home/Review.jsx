import React from "react";

const Review = ({ review }) => {
  return (
    <div className="flex justify-center items-center border my-3 p-5 w-3/4 rounded-md mx-auto">
      <div className="avatar">
        <div className="w-12 rounded-full">
          <img src="https://api.lorem.space/image/face?hash=92310" alt="" />
        </div>
      </div>
      <div className="ml-5">
        <h4 className="text-primary font-bold">{review.name}</h4>
        <p className="text-secondary">{review.review}</p>
      </div>
    </div>
  );
};

export default Review;
