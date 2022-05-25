import React from "react";
import { useNavigate } from "react-router-dom";

const AllProducts = ({ part, index }) => {
  const navigate = useNavigate();
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{part._id.slice(0, 6) + "..."}</td>
      <td>{part.name.slice(0, 6) + "..."}</td>
      <td>{part.available_quantity}</td>
      <td>
        <button
          onClick={() => navigate(`/update/${part._id}`)}
          className="btn btn-primary btn-xs"
        >
          Update
        </button>
      </td>
      <td>
        <button className="btn btn-xs btn-error bg-red-500 btn-red-500 text-white">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default AllProducts;
