import React, { useEffect, useState } from "react";
import ManageOrderRow from "./ManageOrderRow";
import OrderDeleteModal from "./OrderDeleteModal";
import { Table, Thead, Tbody, Tr, Th } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const ManageOrder = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [deleting, setDeleting] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4000/all-orders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, [allOrders]);
  return (
    <div>
      <h2 className="text-xl font-bold my-10">
        Manage Orders: {allOrders.length}
      </h2>
      <div>
        <Table>
          <Thead>
            <Tr style={{ border: "2px solid #E6E5E5" }}>
              <Th style={{ textAlign: "center", padding: "15px" }}></Th>
              <Th style={{ textAlign: "center", padding: "15px" }}>
                ProductId
              </Th>
              <Th style={{ textAlign: "center", padding: "15px" }}>Quantity</Th>
              <Th style={{ textAlign: "center", padding: "15px" }}>Price</Th>
              <Th style={{ textAlign: "center", padding: "15px" }}>Payment</Th>
              <Th style={{ textAlign: "center", padding: "15px" }}>Status</Th>
              <Th style={{ textAlign: "center", padding: "15px" }}></Th>
              <Th style={{ textAlign: "center", padding: "15px" }}></Th>
            </Tr>
          </Thead>
          <Tbody>
            {allOrders.map((order, index) => (
              <ManageOrderRow
                key={order._id}
                order={order}
                index={index}
                setDeleting={setDeleting}
              ></ManageOrderRow>
            ))}
          </Tbody>
        </Table>
      </div>
      {deleting && <OrderDeleteModal deleting={deleting} />}
    </div>
  );
};

export default ManageOrder;
