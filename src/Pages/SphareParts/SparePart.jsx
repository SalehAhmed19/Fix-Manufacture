import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/solid";

const SparePart = ({ part }) => {
  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
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
          <button className="btn btn-primary w-full">
            Buy Now <ShoppingCartIcon className="h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SparePart;
