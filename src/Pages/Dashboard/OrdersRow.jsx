import React from "react";
import { Link } from "react-router-dom";
import { Tr, Th, Td } from "react-super-responsive-table";
import { MdPayment } from "react-icons/md";
import { TiCancel } from "react-icons/ti";
import "../../Styles/Banner.css";
// import { toast } from "react-toastify";
// import useOrders from "../../Hooks/useOrders";

const OrdersRow = ({ order, index, setDeleting }) => {
  return (
    <Tr style={{ border: "2px solid #E6E5E5" }}>
      <Th style={{ textAlign: "center", padding: "15px" }}>{index + 1}</Th>
      <Td style={{ textAlign: "center", padding: "15px" }}>
        {order.productId.slice(0, 6) + "..."}
      </Td>
      <Td style={{ textAlign: "center", padding: "15px" }}>
        {order.product.slice(0, 15) + "..."}
      </Td>
      <Td style={{ textAlign: "center", padding: "15px" }}>{order.quantity}</Td>
      <Td style={{ textAlign: "center", padding: "15px" }}>${order.price}</Td>
      <Td style={{ padding: "15px" }}>
        {order.price && order.paid ? (
          <p className="text-success text-center">Paid</p>
        ) : (
          <Link to={`/dashboard/payment/${order._id}`}>
            <button className="px-7 py-2 rounded cursor-pointer bg-[#FEC002] mx-auto flex items-center">
              Payment <MdPayment className="mx-2" />
            </button>
          </Link>
        )}
      </Td>
      <Td
        style={{ display: "flex", justifyContent: "center", padding: "15px" }}
      >
        {order?.paid ? (
          <p className="text-[#FEC002]">{order.transactionId}</p>
        ) : (
          <>
            <label
              onClick={setDeleting(order)}
              htmlFor="order-delete"
              className="px-5 py-2 rounded cursor-pointer bg-red-500 flex items-center mx-auto text-white modal-button"
            >
              Cancel Order <TiCancel className="mx-2" />
            </label>
          </>
        )}
      </Td>
    </Tr>
  );
};

export default OrdersRow;
