import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const Purchase = () => {
  const { _id } = useParams();
  const [user] = useAuthState(auth);
  const [part, setPart] = useState({});
  useEffect(() => {
    fetch(`http://localhost:4000/parts/${_id}`)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const quantity = event.target.quantity.value;
    const order = {
      name: name,
      email: email,
      phone: phone,
      productId: part._id,
      product: part.name,
      quantity: quantity,
    };
    if (quantity < part.min_order) {
      return toast.error("You can not order less than 100");
    }
    if (quantity > part.available_quantity) {
      return toast.error(
        `We've ${part.available_quantity} unit on our stock. You can't order above our available quantity`
      );
    }
    const availabeQuantity = part.available_quantity - quantity;
    const update = {
      name: name,
      email: email,
      phone: phone,
      productId: part._id,
      product: part.name,
      quantity: availabeQuantity,
    };

    fetch(`http://localhost:4000/orders`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order),
    }).then((res) =>
      res.json().then((data) => {
        toast.success("Successfully placed the order!");
        console.log(data);
        event.target.reset();
      })
    );
    console.log(name, email, phone, quantity);
    const url = `http://localhost:4000/parts/${_id}`;
    fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setPart(data);
          });
      });
  };
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
          <form onSubmit={handleSubmit} className="mx-auto w-1/2">
            <input
              className="block my-3 h-9 w-full border rounded-md pl-3"
              type="text"
              name="name"
              value={user?.displayName}
              readOnly
            />
            <input
              className="block my-3 h-9 w-full border rounded-md pl-3"
              type="email"
              name="email"
              value={user?.email}
              readOnly
            />
            <input
              className="block my-3 h-9 w-full border rounded-md pl-3"
              type="text"
              name="phone"
              placeholder="Your phone"
            />
            <input
              className="block my-3 h-9 w-full border rounded-md pl-3"
              type="number"
              placeholder="Product Quantity"
              name="quantity"
              required
            />
            <input
              type="submit"
              className="btn btn-primary w-full"
              value="Confirm Purchase"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
