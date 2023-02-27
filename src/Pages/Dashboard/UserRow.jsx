import { signOut } from "firebase/auth";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import { Td, Tr, Th } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const UserRow = ({ user, index, refetch }) => {
  const navigate = useNavigate();
  const email = user.email;
  const makeAdmin = () => {
    fetch(`https://fix-manufacturer.onrender.com/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          signOut(auth);
          navigate("/");
          toast.error("Failed to made an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          return toast.success(`Successfully made an admin: ${user.email}`);
        }
      });
  };
  const removeAdmin = () => {
    fetch(`https://fix-manufacturer.onrender.com/users/admin-remove/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          signOut(auth);
          navigate("/");
          toast.error("Failed to made an admin");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          return toast.success(`Successfully remove an admin: ${user.email}`);
        }
      });
  };
  return (
    <Tr style={{ border: "2px solid #E6E5E5" }}>
      <Th style={{ textAlign: "center", padding: "15px" }}>{index + 1}</Th>
      <Td style={{ textAlign: "center", padding: "15px" }}>{user.email}</Td>
      <Td style={{ textAlign: "center", padding: "15px" }}>
        {user.role === "admin" ? (
          <p className="text-gray-400">Already Admin</p>
        ) : (
          <button
            onClick={makeAdmin}
            className="px-7 py-2 rounded cursor-pointer bg-[#FEC002] mx-auto flex items-center"
          >
            Make Admin
          </button>
        )}
      </Td>
      <Td>
        <button
          onClick={removeAdmin}
          className="px-7 py-2 rounded cursor-pointer bg-red-500 text-[#fff] mx-auto flex items-center"
        >
          Remove Admin
        </button>
      </Td>
    </Tr>
  );
};

export default UserRow;
