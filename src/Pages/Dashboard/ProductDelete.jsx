import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FcCancel } from "react-icons/fc";
import { toast } from "react-toastify";
import useParts from "../../Hooks/useParts";

const ProductDelete = ({ deleting }) => {
  const { _id } = deleting;
  const [parts, setParts] = useParts();
  const handleDelete = () => {
    fetch(`https://fix-manufacturer.onrender.com/parts/${_id}`, {
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
      <input type="checkbox" id="product-delete" className="modal-toggle" />
      <div className="modal">
        <div className="bg-[#FEC002] py-10 px-20 relative rounded-md">
          <label
            htmlFor="product-delete"
            className="p-3 rounded-full font-bold absolute right-2 top-2 cursor-pointer"
          >
            ✕
          </label>
          <h5 className="font-bold my-5">
            Are you sure you want to delete this product?
          </h5>
          <div className="flex">
            <label
              htmlFor="product-delete"
              onClick={() => handleDelete(_id)}
              className="bg-red-500 px-5 py-2 rounded text-[#fff] mx-5 flex justify-between items-center cursor-pointer w-1/2"
            >
              Delete
            </label>
            <label
              htmlFor="product-delete"
              className="bg-transparent border border-red-500 px-5 py-2 rounded text-red-500 hover:bg-[#fff] hover:text-red-500 cursor-pointer flex justify-between items-center w-1/2"
            >
              Cancel <FcCancel />
            </label>
          </div>
        </div>
      </div>
    </div>
    // <div>
    //   <input type="checkbox" id="order-delete" className="modal-toggle" />
    //   <div className="modal">
    //     <div className="bg-[#FEC002] py-10 px-20 relative rounded-md">
    //       <label
    //         htmlFor="order-delete"
    //         className="p-3 rounded-full font-bold absolute right-2 top-2 cursor-pointer"
    //       >
    //         ✕
    //       </label>
    //       <h5 className="font-bold my-5 text-[#000]">
    //         Are you sure you want to cancel your order?
    //       </h5>
    //       <div className="flex">
    //         <label
    //           htmlFor="order-delete"
    //           onClick={() => handleDelete(_id)}
    //           className="bg-red-500 px-5 py-2 rounded text-[#fff] mx-5 flex justify-between items-center cursor-pointer w-1/2"
    //         >
    //           Delete
    //           <AiOutlineDelete />
    //         </label>
    //         <label
    //           htmlFor="order-delete"
    //           className="bg-transparent border border-red-500 px-5 py-2 rounded text-red-500 hover:bg-[#fff] hover:text-red-500 cursor-pointer flex justify-between items-center w-1/2"
    //         >
    //           Cancel
    //           <FcCancel />
    //         </label>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductDelete;
