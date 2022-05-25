import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import ProfileUpdateModal from "./ProfileUpdateModal";

const MyProfile = () => {
  const [user] = useAuthState(auth);
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
          <p>Phone: {}</p>
          <p>Address: {}</p>
          <p>Social Link: {}</p>
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
