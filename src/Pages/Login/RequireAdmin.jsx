import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import { HashLoader } from "react-spinners";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";
import Loading from "../../Shared/Loading";

const RequireAdmin = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [admin, adLoad] = useAdmin(user);
  const location = useLocation();
  if (loading || adLoad) {
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
  if (!user || !admin) {
    signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default RequireAdmin;
