import React from "react";
import useOrders from "../../Hooks/useOrders";
import ManageOrderRow from "./ManageOrderRow";

const ManageOrder = () => {
  const [orders, setOrders] = useOrders();
  return (
    <div>
      <h2 className="text-xl font-bold">Manage Orders: {orders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>ProductId</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <ManageOrderRow
                key={order._id}
                order={order}
                index={index}
              ></ManageOrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrder;
