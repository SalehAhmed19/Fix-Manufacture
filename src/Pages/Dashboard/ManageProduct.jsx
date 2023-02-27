import React, { useState } from "react";
import useParts from "../../Hooks/useParts";
import AllProducts from "./AllProducts";
import ProductDelete from "./ProductDelete";
import { Table, Thead, Tbody, Tr, Th } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const ManageProduct = () => {
  const [parts] = useParts();
  const [deleting, setDeleting] = useState(null);
  return (
    <div>
      <h2 className="text-xl font-bold my-5">Manage Product</h2>
      <div>
        <div>
          <Table>
            <Thead>
              <Tr>
                <Th></Th>
                <Th>ProductId</Th>
                <Th>Product Name</Th>
                <Th>QtY</Th>
                <Th></Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {parts.map((part, index) => (
                <AllProducts
                  key={part._id}
                  index={index}
                  part={part}
                  setDeleting={setDeleting}
                ></AllProducts>
              ))}
            </Tbody>
          </Table>
        </div>
      </div>
      {deleting && <ProductDelete deleting={deleting} />}
    </div>
  );
};

export default ManageProduct;
