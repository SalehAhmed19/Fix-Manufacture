import React, { useEffect, useState } from "react";
import Review from "./Review";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://fix-manufacturer.onrender.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <Fade up>
      <div className="my-20">
        <h2 className="text-[#000] text-3xl lg:text-6xl font-bold text-center my-5">
          Reviews
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5">
          {reviews.reverse().map((review) => (
            <Zoom>
              <Review key={review._id} review={review} />
            </Zoom>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default Reviews;
