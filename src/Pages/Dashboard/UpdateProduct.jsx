import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateProduct = () => {
  const { id } = useParams();
  const [part, setPart] = useState({});
  useEffect(() => {
    const url = `https://stark-basin-47833.herokuapp.com/parts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, []);
  const handleRestock = (event) => {
    let { name, price, des, min_order, img, available_quantity } = part;
    event.preventDefault();
    const restockQuantity = event.target.restock.value;
    if (!restockQuantity || restockQuantity < 0) {
      toast("Please enter a valid number");
    } else {
      available_quantity =
        parseInt(available_quantity) + parseInt(restockQuantity);
      const updateQuantity = {
        name: name,
        price: price,
        des: des,
        min_order: min_order,
        img: img,
        available_quantity: available_quantity,
      };
      const url = `https://stark-basin-47833.herokuapp.com/parts/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateQuantity),
      })
        .then((res) => res.json())
        .then((data) => {
          fetch(url)
            .then((res) => res.json())
            .then((data) => {
              setPart(data);
              console.log(data);
              event.target.reset();
            });
        });
    }
  };
  return (
    <div className="mx-20">
      <h2 className="text-3xl text-primary text-center font-bold">Update</h2>
      <div className="card card-side w-1/2 mx-auto mt-10 bg-base-100 shadow-xl">
        <figure>
          <img src={part.img} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-primary">{part.name}</h2>
          <p>
            <span className="font-bold">ProductId: </span>
            {id}
          </p>
          <p>
            <span className="font-bold">Minimum Order: </span>
            {part.min_order}
          </p>
          <p>
            <span className="font-bold">Available Quantity: </span>
            {part.available_quantity}
          </p>
          <p>
            <span className="font-bold">Price: </span>
            &euro;{part.price}
          </p>
          <form onSubmit={handleRestock} className="card-actions justify-end">
            <input
              type="number"
              name="restock"
              placeholder="Restock"
              className="block my-3 border w-full rounded-md h-9 pl-3"
            />
            <input
              type="submit"
              className="btn btn-primary w-full"
              value="Restock"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
