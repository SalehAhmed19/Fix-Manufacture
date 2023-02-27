import { updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const ProfileUpdateModal = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const phone = event.target.phone.value;
    const address = event.target.address.value;
    const link = event.target.links.value;
    const profileInfo = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      link: link,
    };
    console.log(name, email, phone, address, link);
    const url = `https://fix-manufacturer.onrender.com/users/${email}`;
    console.log(url);
    fetch(`https://fix-manufacturer.onrender.com/users/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(profileInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        event.target.reset();
        console.log(data);
      });
  };
  return (
    <div>
      <input type="checkbox" id="profile-update" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="profile-update"
            className="btn btn-primary btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form onSubmit={handleSubmit}>
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              value={user?.displayName}
              onChange={(e) => setName(e.target.value)}
              name="name"
              className="block h-8 border p-5 rounded-md w-full"
            />
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={user?.email}
              className="block h-8 border p-5 rounded-md w-full"
            />
            <label className="label">
              <span className="label-text">Your Phone</span>
            </label>
            <input
              type="text"
              name="phone"
              className="block h-8 border p-5 rounded-md w-full"
            />
            <label className="label">
              <span className="label-text">Your Address</span>
            </label>
            <input
              type="text"
              name="address"
              className="block h-8 border p-5 rounded-md w-full"
            />
            <label className="label">
              <span className="label-text">Your Social Link</span>
            </label>
            <input
              type="text"
              name="links"
              className="block h-8 border p-5 rounded-md w-full"
            />
            <div className="modal-action">
              <input
                type="submit"
                value="Submit"
                className="btn btn-primary w-full"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdateModal;
