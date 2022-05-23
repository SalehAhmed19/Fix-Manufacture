import React, { useState } from "react";
import { toast } from "react-toastify";

const OrdersRow = ({ order, index }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{order.productId.slice(0, 6) + "..."}</td>
      <td>{order.product}</td>
      <td>{order.quantity}</td>
      <td>
        <button className="btn btn-xs btn-error">Delete</button>
      </td>
    </tr>
  );
};

export default OrdersRow;
