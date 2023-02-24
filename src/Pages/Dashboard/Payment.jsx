import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L36LkEVf4131Gq0BMbe43xyWrFh3Sjog7KpJCTgJjUmsnikihxXUTvbOzr5WldIXELs6TAR4Z1ViOQsM61tJkaW00I2B5qasE"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:4000/orders/${id}`;
  const { data: order, isLoading } = useQuery("order", () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-xl font-bold">Payment</h2>
      <p>Payment for product: {id}</p>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full shadow-xl">
            <div className="card-body">
              <h1 className="text-xl font-bold text-success">
                Hey, {order.name}
              </h1>
              <h2 className="card-title">Pay for:</h2>
              <h4 className=" text-xl text-primary font-bold">
                {order.product}
              </h4>
              <p>
                <span className="font-bold">Quantity: </span>
                {order.quantity}
              </p>
              <p>
                <span className="font-bold">Total Amount:</span> &euro;
                {order.price}
              </p>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <Elements stripe={stripePromise}>
                <CheckoutForm order={order} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
