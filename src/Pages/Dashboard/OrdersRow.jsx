import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
// import useOrders from "../../Hooks/useOrders";

const OrdersRow = ({ order, index, orders, setOrders }) => {
  const handleDelete = (_id) => {
    const agree = window.confirm("Are you sure you want to delete");
    if (agree) {
      fetch(`https://stark-basin-47833.herokuapp.com/orders/${_id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
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
      <td>{order.productId.slice(0, 6) + "..."}</td>
      <td>{order.product.slice(0, 15) + "..."}</td>
      <td>{order.quantity}</td>
      <td>&euro;{order.price}</td>
      <td>
        {order.price && order.paid ? (
          <p className="text-success">Paid</p>
        ) : (
          <Link to={`/dashboard/payment/${order._id}`}>
            <button className="btn btn-xs btn-primary text-white">
              Payment
            </button>
          </Link>
        )}
      </td>
      <td>
        {order?.paid ? (
          <p className="text-primary">
            TransId: <span className="text-success">{order.transactionId}</span>
          </p>
        ) : (
          <button
            onClick={() => handleDelete(order._id)}
            className="btn btn-xs btn-error bg-red-500 text-white"
          >
            Cancel Order
          </button>
        )}
      </td>
    </tr>
  );
};

export default OrdersRow;
