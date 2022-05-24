import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <h2 className="text-primary text-3xl font-bold text-center my-5">
        Reviews
      </h2>
      {reviews.map((review) => (
        <Review key={review._id} review={review}></Review>
      ))}
    </div>
  );
};

export default Reviews;
