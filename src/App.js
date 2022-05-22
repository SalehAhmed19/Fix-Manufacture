import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
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
        <Route path="/parts" element={<SphareParts />}></Route>
        <Route path="/purchase" element={<Purchase />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
