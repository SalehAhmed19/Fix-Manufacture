import React from "react";
import { useQuery } from "react-query";
import { HashLoader } from "react-spinners";
import Loading from "../../Shared/Loading";
import UserRow from "./UserRow";
import { Table, Thead, Tbody, Tr, Th } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

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
      <div>
        <Table>
          <Thead>
            <Tr style={{ border: "2px solid #E6E5E5" }}>
              <Th style={{ textAlign: "center", padding: "15px" }}></Th>
              <Th style={{ textAlign: "center", padding: "15px" }}>Name</Th>
              <Th style={{ textAlign: "center", padding: "15px" }}>Job</Th>
              <Th style={{ textAlign: "center", padding: "15px" }}>
                Favorite Color
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user, index) => (
              <UserRow
                key={user._id}
                user={user}
                index={index}
                refetch={refetch}
              ></UserRow>
            ))}
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default MakeAdmin;
