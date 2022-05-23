import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useParts from "../../Hooks/useParts";

const Purchase = () => {
  const { _id } = useParams();
  const [part, setPart] = useState({});
  useEffect(() => {
    fetch(`https://stark-basin-47833.herokuapp.com/parts/${_id}`)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, []);
  return (
    <div>
      <div className="w-3/4 flex items-center shadow-xl mx-auto mt-10">
        <div>
          <img src={part.img} alt="item" />
        </div>
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
            <span className="font-bold">Price: </span>
            &euro;{part.price}
          </h5>
          <div className="mx-auto w-1/2">
            <input
              className="block my-3 h-9 w-full border rounded-md pl-3"
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <input
              className="block my-3 h-9 w-full border rounded-md pl-3"
              type="email"
              name="email"
              placeholder="Your email"
            />
            <input
              className="block my-3 h-9 w-full border rounded-md pl-3"
              type="text"
              name="phone"
              placeholder="Your phone"
            />
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Confirm Purchase</button>
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
