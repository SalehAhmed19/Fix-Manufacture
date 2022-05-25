import React from "react";
import useParts from "../../Hooks/useParts";
import AllProducts from "./AllProducts";

const ManageProduct = () => {
  const [parts] = useParts();
  return (
    <div>
      <h2 className="text-xl font-bold">Manage Product</h2>
      <div>
        <div class="overflow-x-auto">
          <table class="table w-full">
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
                ></AllProducts>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
