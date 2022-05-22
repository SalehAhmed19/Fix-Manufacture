import React from "react";
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
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
