import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../Hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
      <div className="drawer drawer-mobile my-24">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <h2 className="text-3xl text-primary font-bold">Dashboard</h2>
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {!admin && (
              <>
                <li>
                  <Link to="/dashboard">My Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/add-review">Add review</Link>
                </li>
              </>
            )}
            {admin && (
              <>
                <li>
                  <Link to="/dashboard/add-product">Add Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/manage-product">Manage Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/manage-order">Manage Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/users">Make Admin</Link>
                </li>
              </>
            )}
            {/* <li>
              <Link to="/dashboard/profile">My Profile</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
