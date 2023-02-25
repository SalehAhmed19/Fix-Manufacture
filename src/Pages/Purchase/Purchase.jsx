import { Button } from "@mui/joy";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { GiShoppingBag } from "react-icons/gi";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Magnifier from "react-magnifier";

const Purchase = () => {
  const { _id } = useParams();
  const [user] = useAuthState(auth);
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [part, setPart] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  useEffect(() => {
    fetch(`http://localhost:4000/parts/${_id}`)
      .then((res) => res.json())
      .then((data) => setPart(data));
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    const phone = event.target.phone.value;
    const order = {
      name: name,
      email: user?.email,
      phone: phone,
      productId: part._id,
      product: part.name,
      available_quantity: parseInt(part.available_quantity),
      quantity: parseInt(orderQuantity),
      price: part.price * orderQuantity,
    };
    if (orderQuantity < part.min_order) {
      return toast.error("You can not order less than 100");
    }
    if (orderQuantity > part.available_quantity) {
      return toast.error(
        `We've ${part.available_quantity} unit on our stock. You can't order above our available quantity`
      );
    }
    const availabeQuantity =
      parseInt(part.available_quantity) - parseInt(orderQuantity);
    const update = {
      name: name,
      email: user?.email,
      phone: phone,
      productId: part._id,
      product: part.name,
      available_quantity: parseInt(availabeQuantity),
    };

    fetch(`http://localhost:4000/orders`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(order),
    }).then((res) =>
      res.json().then((data) => {
        toast.success("Successfully placed the order!");
        event.target.reset();
      })
    );
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
      <div className="lg:w-3/4 flex flex-col lg:flex-row items-center mx-auto my-24">
        <div>
          <Magnifier src={part.img} width={300} />
          <div className="mx-5">
            <h2 className="text-xl lg:text-3xl font-bold">{part.name}</h2>
            <p className="mb-5">{part.des}</p>
            <p>
              <span className="font-bold">Minimum Order: </span>
              {part.min_order}
            </p>
            <p>
              <span className="font-bold">Available Quantity: </span>
              {part.available_quantity}
            </p>
            <h5 className="text-xl">
              <span className="font-bold">Price: </span>${part.price}
            </h5>
          </div>
        </div>
        <div className="card-body border-2 rounded-lg">
          <h3 className="font-bold text-[#FEC002] text-xl text-center">
            Place your order
          </h3>
          <form onSubmit={handleSubmit} className="mx-auto">
            <TextField
              sx={{ width: "100%", marginTop: "20px" }}
              value={user?.displayName}
              onChange={(e) => setName(e.target.value)}
              readOnly
              type="text"
              name="name"
              id="outlined-basic"
              variant="outlined"
            />
            <TextField
              sx={{ width: "100%", marginTop: "20px" }}
              value={user?.email}
              onChange={(e) => setName(e.target.value)}
              readOnly
              type="email"
              name="email"
              id="outlined-basic"
              variant="outlined"
            />
            <TextField
              sx={{ width: "100%", marginTop: "20px" }}
              type="text"
              name="phone"
              label="Your Phone"
              id="outlined-basic"
              variant="outlined"
            />
            <TextField
              onChange={(e) => setOrderQuantity(e.target.value)}
              sx={{ width: "100%", marginTop: "20px" }}
              type="number"
              placeholder="Product Quantity"
              name="quantity"
              label="Product Quantity"
              id="outlined-basic"
              variant="outlined"
              required
            />
            {orderQuantity > part.available_quantity ||
            orderQuantity < part.min_order ? (
              <Button
                type="submit"
                disabled
                variant="solid"
                size="lg"
                style={{
                  color: "#878787",
                  backgroundColor: "#A7B4C7",
                  marginTop: "10px",
                  width: "100%",
                  display: "flex",
                  padding: "15px",
                }}
                aria-label="Explore Bahamas Islands"
                sx={{ ml: "auto", fontWeight: 600 }}
              >
                Purchase <GiShoppingBag className="ml-3" />
              </Button>
            ) : (
              <Button
                type="submit"
                variant="solid"
                size="lg"
                style={{
                  color: "#FF0000",
                  backgroundColor: "#FEC002",
                  marginTop: "10px",
                  width: "100%",
                  display: "flex",
                  padding: "15px",
                }}
                aria-label="Explore Bahamas Islands"
                sx={{ ml: "auto", fontWeight: 600 }}
              >
                Purchase <GiShoppingBag className="ml-3" />
              </Button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
