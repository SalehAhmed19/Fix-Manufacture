import React, { useState } from "react";
import { toast } from "react-toastify";
import useOrders from "../../Hooks/useOrders";

const ManageOrderRow = ({ order, index }) => {
  const [orders, setOrders] = useOrders();
  const [pending, setPending] = useState("Pending");
  const handleDeivered = (_id) => {
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
          onClick={() => handleDeivered(order._id)}
          className="btn btn-xs btn-primary"
        >
          Deliver
        </button>
      </td>
    </tr>
  );
};

export default ManageOrderRow;
