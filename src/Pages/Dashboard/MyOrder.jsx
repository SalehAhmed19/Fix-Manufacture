import React from "react";
import useOrders from "../../Hooks/useOrders";
import OrdersRow from "./OrdersRow";

const MyOrder = () => {
  const [orders] = useOrders();
  const reload = () => {
    window.location.reload();
  };
  return (
    <div>
      <h2 className="text-xl font-bold">My Order</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product ID</th>
              <th>Product</th>
              <th>QtY</th>
              <th>
                <button onClick={reload} className="btn btn-xs btn-accent">
                  Refresh
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <OrdersRow
                key={order._id}
                order={order}
                index={index}
              ></OrdersRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
