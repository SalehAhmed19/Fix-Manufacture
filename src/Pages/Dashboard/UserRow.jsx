import React from "react";
import { toast } from "react-toastify";

const UserRow = ({ user, index, refetch }) => {
  const email = user.email;
  const makeAdmin = () => {
    fetch(`https://stark-basin-47833.herokuapp.com/users/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        toast.success(`Successfully made an admin: ${user.email}`);
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
