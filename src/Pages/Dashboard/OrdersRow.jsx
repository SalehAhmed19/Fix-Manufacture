import React from "react";
import { toast } from "react-toastify";
import useOrders from "../../Hooks/useOrders";

const OrdersRow = ({ order, index }) => {
  const [orders, setOrders] = useOrders();
  console.log(orders);
  const handleDelete = (_id) => {
    const agree = window.confirm("Are you sure you want to delete");
    if (agree) {
      console.log("deleted", _id);
      fetch(`http://localhost:4000/orders/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
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
      <td>
        <button
          onClick={() => handleDelete(order._id)}
          className="btn btn-xs btn-error"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default OrdersRow;
