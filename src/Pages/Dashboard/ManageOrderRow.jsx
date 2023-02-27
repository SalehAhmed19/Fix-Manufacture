import React, { useState } from "react";
import { Td, Tr, Th } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const ManageOrderRow = ({ order, index, setDeleting }) => {
  const [pending, setPending] = useState("Pending");
  const _id = order._id;
  const handleDeivered = () => {
    setPending("Shipped");
  };
  return (
    <Tr style={{ border: "2px solid #E6E5E5" }}>
      <Th style={{ textAlign: "center", padding: "15px" }}>{index + 1}</Th>
      <Td style={{ textAlign: "center", padding: "15px" }}>
        {order._id.slice(0, 7) + "..."}
      </Td>
      <Td style={{ textAlign: "center", padding: "15px" }}>{order.quantity}</Td>
      <Td style={{ textAlign: "center", padding: "15px" }}>
        &euro;{order.price}
      </Td>
      {order.paid ? (
        <Td
          style={{ textAlign: "center", padding: "15px" }}
          className="text-success"
        >
          Paid
        </Td>
      ) : (
        <Td
          style={{ textAlign: "center", padding: "15px" }}
          className="text-error"
        >
          Unpaid
        </Td>
      )}
      {order.paid ? <Td className="text-orange-500">{pending}</Td> : <Td></Td>}
      <Td style={{ textAlign: "center", padding: "15px" }}>
        <button
          onClick={() => handleDeivered(_id)}
          className="px-7 py-2 rounded cursor-pointer bg-[#FEC002] mx-auto flex items-center"
        >
          Deliver
        </button>
      </Td>
      {order.paid ? (
        <Td style={{ textAlign: "center", padding: "15px" }}></Td>
      ) : (
        <Td style={{ textAlign: "center", padding: "15px" }}>
          <label
            onClick={setDeleting(order)}
            htmlFor="order-delete"
            className="px-7 py-2 rounded cursor-pointer bg-red-500 text-[#fff] mx-auto flex items-center"
          >
            Delete Order
          </label>
        </Td>
      )}
    </Tr>
  );
};

export default ManageOrderRow;
