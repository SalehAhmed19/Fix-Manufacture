import React from "react";
import { TiCancel } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { Td, Tr, Th } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const AllProducts = ({ part, index, setDeleting }) => {
  const navigate = useNavigate();
  return (
    <Tr style={{ border: "2px solid #E6E5E5" }}>
      <Th style={{ textAlign: "center", padding: "15px" }}>{index + 1}</Th>
      <Td style={{ textAlign: "center", padding: "15px" }}>
        {part._id.slice(0, 6) + "..."}
      </Td>
      <Td style={{ textAlign: "center", padding: "15px" }}>
        {part.name.slice(0, 6) + "..."}
      </Td>
      <Td>{part.available_quantity}</Td>
      <Td style={{ textAlign: "center", padding: "15px" }}>
        <button
          onClick={() => navigate(`/dashboard/update/${part._id}`)}
          className="px-7 py-2 rounded cursor-pointer bg-[#FEC002] mx-auto flex items-center"
        >
          Update
        </button>
      </Td>
      <Td style={{ textAlign: "center", padding: "15px" }}>
        <label
          htmlFor="product-delete"
          onClick={setDeleting(part)}
          className="px-5 py-2 rounded cursor-pointer bg-red-500 flex items-center mx-auto text-white modal-button w-32"
        >
          Delete <TiCancel className="mx-2" />
        </label>
      </Td>
    </Tr>
  );
};

export default AllProducts;
