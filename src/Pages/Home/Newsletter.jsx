import { TextField } from "@mui/material";
import React from "react";
import Fade from "react-reveal/Fade";

const Newsletter = () => {
  return (
    <Fade up>
      <div className="flex lg:flex-row flex-col lg:my-10 ">
        <div className="lg:w-1/2 bg-[#000] h-96 py-14 lg:px-20 px-10">
          <Fade left>
            <h3 className="text-[#fff] text-2xl font-bold my-3">
              Brand We Trust
            </h3>
            <p className="text-[#C2C2C2]">
              We carry over 250 of the world's highest quality automotive parts
            </p>
          </Fade>
        </div>
        <div className="lg:w-1/2 bg-[#FEBF04] h-96 px-10 py-14">
          <Fade right>
            <h4 className="font-bold text-[#fff]">
              Subscribe To Our Newsletter!
            </h4>
            <h3 className="text-3xl font-bold my-5 text-[#fff]">
              Get The Latest News <br /> & Amazing Offers
            </h3>
            <div className="flex lg:w-2/3">
              <input
                className="py-3 w-full px-3 focus:border-none"
                type="text"
              />
              <button className="bg-[#000] px-5 text-[#fff]">SUBSCRIBE</button>
            </div>
            <p className="my-3 text-[#fff] font-bold">
              <small>We don't send spam messages</small>
            </p>
          </Fade>
        </div>
      </div>
    </Fade>
  );
};

export default Newsletter;
