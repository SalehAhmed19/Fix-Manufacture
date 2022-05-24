import React from "react";
import useOrders from "../../Hooks/useOrders";
import OrdersRow from "./OrdersRow";

const MyOrder = () => {
  const [orders, setOrders] = useOrders();
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
              <th>Total Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <OrdersRow
                key={order._id}
                order={order}
                index={index}
                setOrders={setOrders}
                orders={orders}
              ></OrdersRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
