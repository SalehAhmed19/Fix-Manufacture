import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Review = ({ review }) => {
  const [user] = useAuthState(auth);
  return (
    <div className="items-center border my-3 p-5 w-full rounded-md mx-auto">
      <div className="avatar">
        <div className="w-12 rounded-full">
          <img src={user?.photoURL} alt="" />
        </div>
      </div>
      <div className="ml-5">
        <h4 className="text-primary font-bold">{review.name}</h4>
        <p className="text-primary font-bold">{review.email}</p>
        <p className="text-primary font-bold">{review.ratings}</p>
        <p className="text-secondary">{review.review}</p>
      </div>
    </div>
  );
};

export default Review;
