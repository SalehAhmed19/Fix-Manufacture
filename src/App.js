import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import SphareParts from "./Pages/SphareParts/SphareParts";
import Navbar from "./Shared/Navbar";

function App() {
  return (
    <div className="text-secondary">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/parts" element={<SphareParts />}></Route>
      </Routes>
    </div>
  );
}

export default App;
