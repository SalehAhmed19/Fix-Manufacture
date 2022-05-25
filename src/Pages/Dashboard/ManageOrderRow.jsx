import React from "react";
import { toast } from "react-toastify";
import useOrders from "../../Hooks/useOrders";

const ManageOrderRow = ({ order, index }) => {
  const [orders, setOrders] = useOrders();
  const handleDeivered = (_id) => {
    const agree = window.confirm("Are you sure you want to delete");
    if (agree) {
      fetch(`https://stark-basin-47833.herokuapp.com/orders/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remainingOrders = orders.filter((order) => order._id !== _id);
            setOrders(remainingOrders);
            toast.success("Order deleted successfully");
          }
        });
    }
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{order._id.slice(0, 7) + "..."}</td>
      <td>{order.quantity}</td>
      <td>&euro;{order.price}</td>
      {order.paid ? <td className="text-success">Paid</td> : <td></td>}
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
