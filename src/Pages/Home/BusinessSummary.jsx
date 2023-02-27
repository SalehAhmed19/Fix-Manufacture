import React from "react";
import { IoIosPeople } from "react-icons/io";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineReviews } from "react-icons/md";
import { BsGearWideConnected } from "react-icons/bs";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

const BusinessSummary = () => {
  const summary = [
    {
      _id: 1,
      summary: "1000+ customers",
      icon: <IoIosPeople />,
    },
    {
      _id: 2,
      summary: "150M+ Annual revenue",
      icon: <GiMoneyStack />,
    },
    {
      _id: 3,
      summary: "35K+ Reviews",
      icon: <MdOutlineReviews />,
    },
    {
      _id: 4,
      summary: "100+ Parts",
      icon: <BsGearWideConnected />,
    },
  ];
  return (
    <Fade up>
      <div className="px-5 py-20">
        <h2 className="font-bold text-center text-3xl lg:text-6xl py-3 text-[#000]">
          Business Summary
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-center p-10">
          {summary.map((sum) => (
            <Zoom>
              <div className="rounded-md p-10 flex flex-col justify-center items-center w-80 m-5 bg-[#FEBF04]">
                <h1 className="text-6xl">{sum.icon}</h1>
                <h3 className="font-bold">{sum.summary}</h3>
              </div>
            </Zoom>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default BusinessSummary;
