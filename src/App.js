import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { HashLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";
import AddProduct from "./Pages/Dashboard/AddProduct";
import AddReview from "./Pages/Dashboard/AddReview";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin";
import ManageOrder from "./Pages/Dashboard/ManageOrder";
import ManageProduct from "./Pages/Dashboard/ManageProduct";
import MyOrder from "./Pages/Dashboard/MyOrder";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Payment from "./Pages/Dashboard/Payment";
import UpdateProduct from "./Pages/Dashboard/UpdateProduct";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import RequireAuth from "./Pages/Login/RequireAuth";
import Signup from "./Pages/Login/Signup";
import MyPortfolio from "./Pages/MyPortfolio/MyPortfolio";
import Purchase from "./Pages/Purchase/Purchase";
import SphareParts from "./Pages/SphareParts/SphareParts";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/DrawerAppBar";
import DashboardHome from "./Pages/Dashboard/DashboardHome";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="">
      {loading ? (
        <div
          style={{
            height: "100vh",
            backgroundColor: "#FFC001",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HashLoader size={70} color="#FF7400" />
        </div>
      ) : (
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/parts/" element={<SphareParts />}></Route>
            <Route
              path="/purchase/:_id"
              element={
                <RequireAuth>
                  <Purchase />
                </RequireAuth>
              }
            ></Route>
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            >
              <Route index element={<DashboardHome />}></Route>
              <Route path="my-order" element={<MyOrder />}></Route>
              <Route path="add-review" element={<AddReview />}></Route>
              <Route path="payment/:id" element={<Payment />}></Route>
              <Route
                path="add-product"
                element={
                  <RequireAdmin>
                    <AddProduct />
                  </RequireAdmin>
                }
              ></Route>
              <Route
                path="manage-product"
                element={
                  <RequireAdmin>
                    <ManageProduct />
                  </RequireAdmin>
                }
              ></Route>
              <Route
                path="manage-order"
                element={
                  <RequireAdmin>
                    <ManageOrder />
                  </RequireAdmin>
                }
              ></Route>
              <Route
                path="users"
                element={
                  <RequireAdmin>
                    <MakeAdmin />
                  </RequireAdmin>
                }
              ></Route>
              <Route path="update/:id" element={<UpdateProduct />}></Route>
              <Route path="profile" element={<MyProfile />}></Route>
            </Route>
            <Route path="/blogs" element={<Blogs />}></Route>
            <Route path="/portfolio" element={<MyPortfolio />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>
          <Footer />
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
// primary: #FFC001
// Secondary: #FF7400
// Accent: #FF0000
// http://localhost:4000/
