import React from "react";
import { toast } from "react-toastify";
import useOrders from "../../Hooks/useOrders";
import { AiOutlineDelete } from "react-icons/ai";
import { FcCancel } from "react-icons/fc";

const OrderDeleteModal = ({ deleting }) => {
  const { _id } = deleting;
  const [orders, setOrders] = useOrders();
  const [open, setOpen] = React.useState(false);
  const handleDelete = () => {
    if (!deleting.paid) {
      fetch(`http://localhost:4000/orders/${_id}`, {
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
    }
  };
  return (
    <div>
      <input type="checkbox" id="order-delete" className="modal-toggle" />
      <div className="modal">
        <div className="bg-[#FEC002] py-10 px-20 relative rounded-md">
          <label
            htmlFor="order-delete"
            className="p-3 rounded-full font-bold absolute right-2 top-2 cursor-pointer"
          >
            ✕
          </label>
          <h5 className="font-bold my-5 text-[#000]">
            Are you sure you want to cancel your order?
          </h5>
          <div className="flex">
            <label
              htmlFor="order-delete"
              onClick={() => handleDelete(_id)}
              className="bg-red-500 px-5 py-2 rounded text-[#fff] mx-5 flex justify-between items-center cursor-pointer w-1/2"
            >
              Delete
              <AiOutlineDelete />
            </label>
            <label
              htmlFor="order-delete"
              className="bg-transparent border border-red-500 px-5 py-2 rounded text-red-500 hover:bg-[#fff] hover:text-red-500 cursor-pointer flex justify-between items-center w-1/2"
            >
              Cancel
              <FcCancel />
            </label>
          </div>
        </div>
      </div>
    </div>
    // <React.Fragment>
    //   <Button
    //     variant="outlined"
    //     color="danger"
    //     endDecorator={<DeleteForever />}
    //     onClick={() => setOpen(true)}
    //   >
    //     Discard
    //   </Button>
    //   <Modal open={open} onClose={() => setOpen(false)}>
    //     <ModalDialog
    //       variant="outlined"
    //       role="alertdialog"
    //       aria-labelledby="alert-dialog-modal-title"
    //       aria-describedby="alert-dialog-modal-description"
    //     >
    //       <Typography
    //         id="alert-dialog-modal-title"
    //         component="h2"
    //         startDecorator={<WarningRoundedIcon />}
    //       >
    //         Confirmation
    //       </Typography>
    //       <Divider />
    //       <Typography
    //         id="alert-dialog-modal-description"
    //         textColor="text.tertiary"
    //       >
    //         Are you sure you want to discard all of your notes?
    //       </Typography>
    //       <Box
    //         sx={{
    //           display: "flex",
    //           gap: 1,
    //           justifyContent: "flex-end",
    //           pt: 2,
    //         }}
    //       >
    //         <Button
    //           variant="plain"
    //           color="neutral"
    //           onClick={() => setOpen(false)}
    //         >
    //           Cancel
    //         </Button>
    //         <Button
    //           variant="solid"
    //           color="danger"
    //           onClick={() => {
    //             handleDelete(_id);
    //             setOpen(false);
    //           }}
    //         >
    //           Discard notes
    //         </Button>
    //       </Box>
    //     </ModalDialog>
    //   </Modal>
    // </React.Fragment>
  );
};

export default OrderDeleteModal;
