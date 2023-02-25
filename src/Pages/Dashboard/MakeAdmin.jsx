import React from "react";
import { useQuery } from "react-query";
import { HashLoader } from "react-spinners";
import Loading from "../../Shared/Loading";
import UserRow from "./UserRow";

const MakeAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("http://localhost:4000/users", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return (
      <div
        style={{
          height: "100vh",
          backgroundColor: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HashLoader size={70} color="#FF7400" />
      </div>
    );
  }
  return (
    <div>
      <h2 className="text-xl font-bold my-5">Users</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></UserRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
