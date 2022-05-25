import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import ProfileUpdateModal from "./ProfileUpdateModal";

const MyProfile = () => {
  const [user] = useAuthState(auth);
  const id = useParams();
  const [usr, setUsr] = useState({});
  useEffect(() => {
    fetch(`http://localhost:4000/users/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUsr(data));
  }, []);
  return (
    <div className="ml-5 lg:ml-0">
      <h2 className="text-xl font-bold">My Profile</h2>
      <div className="bg-base-100 shadow-xl p-5">
        <div className="avatar">
          <div className="w-20 rounded-full">
            <img src={user?.photoURL} alt="" />
          </div>
        </div>
        <div className="ml-5">
          <h2 className="text-xl font-bold">Name: {user?.displayName}</h2>
          <p>Email: {user?.email}</p>
          <p>Phone: {usr.phone}</p>
          <p>Address: {usr.address}</p>
          <p>Social Link: {usr.link}</p>
        </div>
        <div className="flex justify-center">
          <label
            htmlFor="profile-update"
            className="btn btn-sm btn-primary btn-outline modal-button"
          >
            Update Information
          </label>
        </div>
      </div>
      <ProfileUpdateModal />
    </div>
  );
};

export default MyProfile;
