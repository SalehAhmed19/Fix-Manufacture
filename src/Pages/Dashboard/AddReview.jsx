import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const ratings = event.target.rating.value;
    const review = event.target.review.value;
    console.log(name, email, ratings, review);
    const reviewInfo = {
      name: name,
      email: email,
      ratings: ratings,
      review: review,
    };
    event.target.reset();
    fetch("http://localhost:4000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviewInfo),
    });
    toast.success("Review added");
  };
  return (
    <div>
      <div className="w-full lg:w-1/2 border rounded-md p-10">
        <h2 className="text-xl font-bold">Add Review</h2>
        <div className="avatar">
          <div className="w-16 rounded-full">
            <img src={user?.photoURL} alt="" />
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="label">Your Name</label>
          <input
            type="text"
            defaultValue={user?.displayName}
            name="name"
            readOnly
            className="block h-10 my-3 border rounded-md pl-4 w-full"
          />
          <label className="label">Your Email</label>
          <input
            type="email"
            defaultValue={user?.email}
            name="email"
            className="block h-10 my-3 border rounded-md pl-4 w-full"
          />
          <label className="label">Ratings</label>
          <input
            placeholder="rating"
            type="text"
            name="rating"
            className="block h-10 my-3 border rounded-md pl-4 w-full"
          />
          <textarea
            className="textarea textarea-bordered w-full"
            name="review"
            placeholder="Write a review"
          ></textarea>
          <input className="btn btn-primary" type="submit" value="Add Review" />
        </form>
      </div>
    </div>
  );
};

export default AddReview;
