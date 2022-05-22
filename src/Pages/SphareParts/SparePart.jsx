import React from "react";

const SparePart = ({ part }) => {
  return (
    <div class="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img className="w-1/2" src={part.img} alt="Shoes" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{part.name}</h2>
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
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SparePart;
