import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();
  const [part, setPart] = useState({});
  useEffect(() => {
    const url = `http://localhost:4000/parts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, []);
  return (
    <div className="mx-20">
      <h2 className="text-3xl text-primary text-center font-bold">Update</h2>
      <div class="card card-side w-1/2 mx-auto mt-10 bg-base-100 shadow-xl">
        <figure>
          <img src={part.img} alt="Movie" />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-primary">{part.name}</h2>
          <p>
            <span className="font-bold">ProductId: </span>
            {id}
          </p>
          <p>
            <span className="font-bold">Minimum Order: </span>
            {part.min_order}
          </p>
          <p>
            <span className="font-bold">Minimum Order: </span>
            {part.available_quantity}
          </p>
          <p>
            <span className="font-bold">Minimum Order: </span>
            {part.price}
          </p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
