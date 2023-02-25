import React, { useEffect, useState } from "react";
import ManageOrderRow from "./ManageOrderRow";
import OrderDeleteModal from "./OrderDeleteModal";

const ManageOrder = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [deleting, setDeleting] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4000/all-orders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [allOrders]);
  return (
    <div>
      <h2 className="text-xl font-bold my-5">
        Manage Orders: {allOrders.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>ProductId</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Status</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, index) => (
              <ManageOrderRow
                key={order._id}
                order={order}
                index={index}
                setDeleting={setDeleting}
              ></ManageOrderRow>
            ))}
          </tbody>
        </table>
      </div>
      {deleting && <OrderDeleteModal deleting={deleting} />}
    </div>
  );
};

export default ManageOrder;
