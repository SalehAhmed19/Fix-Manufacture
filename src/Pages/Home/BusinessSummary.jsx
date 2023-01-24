import React from "react";
import { IoIosPeople } from "react-icons/io";
import { GiMoneyStack } from "react-icons/gi";
import { MdOutlineReviews } from "react-icons/md";
import { BsGearWideConnected } from "react-icons/bs";

const BusinessSummary = () => {
  const summary = [
    {
      _id: 1,
      summary: "We served 100+ customers",
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
    <div className="pb-5 px-5 bg-accent">
      <h2 className="font-bold text-center text-3xl py-3 text-primary">
        Business Summary
      </h2>
      <div className="flex justify-center my-5">
        <div className="stats border w-3/4">
          <div className="stats stats-vertical lg:stats-horizontal shadow">
            {summary.map((sum) => (
              <div className="stat flex flex-col items-center justify-center text-primary">
                <div className="stat-value text-4xl lg:text-6xl">
                  {sum.icon}
                </div>
                <div className="stat-desc lg:text-xl font-bold">
                  {sum.summary}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
