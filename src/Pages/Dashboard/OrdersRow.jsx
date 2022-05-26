import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
// import useOrders from "../../Hooks/useOrders";

const OrdersRow = ({ order, index, setDeleting }) => {
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
          <>
            <label
              onClick={setDeleting(order)}
              htmlFor="order-delete"
              class="btn btn-xs btn-error bg-red-500 text-white modal-button"
            >
              Cancel Order
            </label>
          </>
        )}
      </td>
    </tr>
  );
};

export default OrdersRow;
