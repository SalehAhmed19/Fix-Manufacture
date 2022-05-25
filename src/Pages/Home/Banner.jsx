import React from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/image/banner.jpg";

const Banner = () => {
  // style={{"background-image: url(https://api.lorem.space/image/fashion?w=1000&h=800)}}"
  return (
    <div
      className="hero min-h-screen"
      style={{
        background: `url(${banner})`,
        backgroundSize: "cover",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Fix Manufacturer</h1>
          <h3 className="mb-5 text-xl">Provide best quality products</h3>
          <button className="btn btn-primary">
            <Link to="/parts">Start Shopping</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
