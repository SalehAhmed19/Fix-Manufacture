import React from "react";
import { Link } from "react-router-dom";
import { LoginIcon, LogoutIcon } from "@heroicons/react/outline";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/parts">Spare Parts</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl text-primary">
          FixManufacturer
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/parts">Spare Parts</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button onClick={() => signOut(auth)} className="btn btn-ghost">
            Logout <LogoutIcon className="h-6" />
          </button>
        ) : (
          <Link to="/login" className="btn btn-ghost">
            Login <LoginIcon className="h-6" />
          </Link>
        )}
        <Link to="/signup" className="btn btn-accent">
          Registration
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
