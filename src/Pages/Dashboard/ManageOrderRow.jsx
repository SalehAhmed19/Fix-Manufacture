import React, { useState } from "react";

const ManageOrderRow = ({ order, index, setDeleting }) => {
  const [pending, setPending] = useState("Pending");
  const _id = order._id;
  const handleDeivered = () => {
    setPending("Shipped");
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{order._id.slice(0, 7) + "..."}</td>
      <td>{order.quantity}</td>
      <td>&euro;{order.price}</td>
      {order.paid ? (
        <td className="text-success">Paid</td>
      ) : (
        <td className="text-error">Unpaid</td>
      )}
      {order.paid ? <td className="text-orange-500">{pending}</td> : <td></td>}
      <td>
        <button
          onClick={() => handleDeivered(_id)}
          className="btn btn-xs btn-primary"
        >
          Deliver
        </button>
      </td>
      {order.paid ? (
        <td></td>
      ) : (
        <td>
          <label
            onClick={setDeleting(order)}
            htmlFor="order-delete"
            className="btn btn-xs btn-error bg-red-500 text-white modal-button"
          >
            Delete Order
          </label>
        </td>
      )}
    </tr>
  );
};

export default ManageOrderRow;
