import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ClimbingBoxLoader } from "react-spinners";
import Banner from "./Banner";
import BusinessSummary from "./BusinessSummary";
import Contact from "./Contact";
import Offer from "./Offer";
import Parts from "./Parts";
import Reviews from "./Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Parts />
      <BusinessSummary />
      <Reviews />
      <Offer />
      <Contact />
    </div>
  );
};

export default Home;
