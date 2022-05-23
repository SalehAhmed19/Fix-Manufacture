import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AddReview from "./Pages/Dashboard/AddReview";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrder from "./Pages/Dashboard/MyOrder";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequireAuth from "./Pages/Login/RequireAuth";
import Signup from "./Pages/Login/Signup";
import Purchase from "./Pages/Purchase/Purchase";
import SphareParts from "./Pages/SphareParts/SphareParts";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

function App() {
  return (
    <div className="text-secondary">
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
          <Route index element={<MyOrder />}></Route>
          <Route path="add-review" element={<AddReview />}></Route>
          <Route path="profile" element={<MyProfile />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
