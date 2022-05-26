import React from "react";
import { toast } from "react-toastify";
import useParts from "../../Hooks/useParts";

const ProductDelete = ({ deleting }) => {
  const { _id } = deleting;
  const [parts, setParts] = useParts();
  const handleDelete = () => {
    fetch(`https://stark-basin-47833.herokuapp.com/parts/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remainingProduct = parts.filter(
            (product) => product._id !== _id
          );
          setParts(remainingProduct);
          toast.success("Product deleted successfully");
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="product-delete" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box relative">
          <label
            htmlFor="product-delete"
            class="btn btn-primary btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h5 class="text-xl font-bold my-5">
            Are you sure you want to cancel your order?
          </h5>
          <label
            htmlFor="product-delete"
            onClick={() => handleDelete(_id)}
            className="btn btn-xs btn-error bg-red-500 text-white"
          >
            Delete
          </label>
          <label
            htmlFor="product-delete"
            className="btn btn-xs btn-primary ml-3"
          >
            Cancel
          </label>
        </div>
      </div>
    </div>
  );
};

export default ProductDelete;
