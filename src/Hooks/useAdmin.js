import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adLoad, setAdLoad] = useState(true);
  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`https://dull-plum-iguana-ring.cyclic.app/admin/${email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
          setAdLoad(false);
        });
    }
  }, [user]);
  return [admin, adLoad];
};
export default useAdmin;
