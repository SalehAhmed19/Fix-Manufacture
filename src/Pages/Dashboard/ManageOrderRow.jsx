import React from "react";

const ManageOrderRow = ({ order, index }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{order._id.slice(0, 7) + "..."}</td>
      <td>{order.quantity}</td>
      <td>{order.name}</td>
    </tr>
  );
};

export default ManageOrderRow;
