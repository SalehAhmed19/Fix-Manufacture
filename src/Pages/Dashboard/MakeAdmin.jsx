import React from "react";
import { useQuery } from "react-query";

const MakeAdmin = () => {
  const { data: users } = useQuery("users", () =>
    fetch("http://localhost:4000/users").then((res) => res.json())
  );
  return (
    <div>
      <h2 className="text-xl font-bold">Make Admin: {users.length}</h2>
    </div>
  );
};

export default MakeAdmin;
