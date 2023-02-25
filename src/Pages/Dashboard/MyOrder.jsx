import React, { useState } from "react";
import { Table, Thead, Tbody, Tr, Th } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import useOrders from "../../Hooks/useOrders";
import OrderDeleteModal from "./OrderDeleteModal";
import OrdersRow from "./OrdersRow";

const MyOrder = () => {
  const [orders, setOrders] = useOrders();
  const [deleting, setDeleting] = useState(null);
  return (
    <div>
      <h2 className="text-xl font-bold my-5">My Order</h2>
      <Table>
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Product ID :</Th>
            <Th>Product :</Th>
            <Th>QtY :</Th>
            <Th>Total Price :</Th>
            <Th>Payment Status :</Th>
            <Th>Transaction ID :</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orders.map((order, index) => (
            <OrdersRow
              key={order._id}
              order={order}
              index={index}
              setOrders={setOrders}
              setDeleting={setDeleting}
            ></OrdersRow>
          ))}
        </Tbody>
      </Table>

      {deleting && <OrderDeleteModal deleting={deleting} />}
    </div>
  );
};

export default MyOrder;
