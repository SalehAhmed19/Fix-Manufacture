import React, { useState } from "react";
import useParts from "../../Hooks/useParts";
import AllProducts from "./AllProducts";
import ProductDelete from "./ProductDelete";

const ManageProduct = () => {
  const [parts] = useParts();
  const [deleting, setDeleting] = useState(null);
  return (
    <div>
      <h2 className="text-xl font-bold my-5">Manage Product</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>ProductId</th>
                <th>Product Name</th>
                <th>QtY</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {parts.map((part, index) => (
                <AllProducts
                  key={part._id}
                  index={index}
                  part={part}
                  setDeleting={setDeleting}
                ></AllProducts>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {deleting && <ProductDelete deleting={deleting} />}
    </div>
  );
};

export default ManageProduct;
