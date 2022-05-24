import React, { useEffect, useState } from "react";
import ManageOrderRow from "./ManageOrderRow";

const ManageOrder = () => {
  const [allOrders, setAllOrders] = useState([]);
  useEffect(() => {
    fetch("https://stark-basin-47833.herokuapp.com/all-orders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);
  return (
    <div>
      <h2 className="text-xl font-bold">Manage Orders: {allOrders.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>ProductId</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Payment</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, index) => (
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
