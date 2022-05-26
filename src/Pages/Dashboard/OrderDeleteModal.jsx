import React from "react";
import { toast } from "react-toastify";
import useOrders from "../../Hooks/useOrders";

const OrderDeleteModal = ({ deleting }) => {
  const { _id } = deleting;
  const [orders, setOrders] = useOrders();
  const handleDelete = () => {
    fetch(`https://stark-basin-47833.herokuapp.com/orders/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          const remainingOrders = orders.filter((order) => order._id !== _id);
          setOrders(remainingOrders);
          toast.success("Order deleted successfully");
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="order-delete" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="order-delete"
            className="btn btn-primary btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h5 className="text-xl font-bold my-5">
            Are you sure you want to cancel your order?
          </h5>
          <label
            htmlFor="order-delete"
            onClick={() => handleDelete(_id)}
            className="btn btn-xs btn-error bg-red-500 text-white"
          >
            Delete
          </label>
          <label htmlFor="order-delete" className="btn btn-xs btn-primary ml-3">
            Cancel
          </label>
        </div>
      </div>
    </div>
  );
};

export default OrderDeleteModal;
