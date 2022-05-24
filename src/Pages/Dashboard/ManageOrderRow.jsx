import React from "react";

const ManageOrderRow = ({ order, index }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{order._id.slice(0, 7) + "..."}</td>
      <td>{order.quantity}</td>
      <td></td>
      <td>
        <button className="btn btn-xs btn-primary">Delivered</button>
      </td>
    </tr>
  );
};

export default ManageOrderRow;
