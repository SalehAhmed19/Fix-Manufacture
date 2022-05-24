import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const ProfileUpdateModal = ({ setInfo }) => {
  const [user] = useAuthState(auth);
  const handleSubmit = () => {};
  return (
    <div>
      <input type="checkbox" id="profile-update" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            htmlFor="profile-update"
            class="btn btn-primary btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <form>
            <label className="label">
              <span class="label-text">Your Name</span>
            </label>
            <input
              type="text"
              value={user?.displayName}
              name="name"
              class="block h-8 border p-5 rounded-md w-full"
            />
            <label className="label">
              <span class="label-text">Your Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={user?.email}
              class="block h-8 border p-5 rounded-md w-full"
            />
            <label className="label">
              <span class="label-text">Your Phone</span>
            </label>
            <input
              type="text"
              name="phone"
              class="block h-8 border p-5 rounded-md w-full"
            />
            <label className="label">
              <span class="label-text">Your Address</span>
            </label>
            <input
              type="text"
              name="address"
              class="block h-8 border p-5 rounded-md w-full"
            />
            <label className="label">
              <span class="label-text">Your Social Link</span>
            </label>
            <input
              type="text"
              name="links"
              class="block h-8 border p-5 rounded-md w-full"
            />
          </form>
          <div class="modal-action">
            <input
              type="submit"
              htmlFor="profile-update"
              class="btn btn-primary w-full"
              value="Submit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdateModal;
