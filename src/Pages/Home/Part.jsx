import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { Link, useNavigate } from "react-router-dom";

const Part = ({ part }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/purchase/${part._id}`);
  };
  return (
    <div className="card card-compact w-full bg-base-100 border">
      <figure>
        <img className="w-1/2" src={part.img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{part.name}</h2>
        <p>{part.des}</p>
        <p>
          <span className="font-bold">Minimum Order: </span>
          {part.min_order}
        </p>
        <p>
          <span className="font-bold">Available Quantity: </span>
          {part.available_quantity}
        </p>
        <h5 className="text-xl">
          <span className="font-bold">Price: </span>&euro;{part.price}
        </h5>
        <div className="card-actions justify-end">
          <button onClick={handleNavigate} className="btn btn-primary w-full">
            Purchase <ShoppingCartIcon className="h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Part;
