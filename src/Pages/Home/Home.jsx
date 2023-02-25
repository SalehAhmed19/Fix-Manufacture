import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Contact from "./Contact";
import Newsletter from "./Newsletter";
import Offer from "./Offer";
import Parts from "./Parts";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Parts />
      <Offer />
      <BusinessSummary />
      <Newsletter />
      <Reviews />
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
