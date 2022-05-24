import { signOut } from "firebase/auth";
import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const UserRow = ({ user, index, refetch }) => {
  const navigate = useNavigate();
  const email = user.email;
  const makeAdmin = () => {
    fetch(`https://stark-basin-47833.herokuapp.com/users/admin/${email}`, {
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
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user.email}</td>
      <td>
        {user.role === "admin" ? (
          <p className="text-gray-400">Already Admin</p>
        ) : (
          <button onClick={makeAdmin} className="btn btn-primary btn-xs">
            Make Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-error bg-red-500 btn-xs text-white">
          Remove Admin
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
