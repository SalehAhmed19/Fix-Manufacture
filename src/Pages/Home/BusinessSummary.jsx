import React from "react";
import Summery from "./Summery";

const BusinessSummary = () => {
  const summary = [
    {
      _id: 1,
      summary: "We served 100+ customers",
    },
    {
      _id: 2,
      summary: "120M+ Annual revenue",
    },
    {
      _id: 3,
      summary: "33K+ Reviews",
    },
    {
      _id: 4,
      summary: "50+ tools",
    },
  ];
  return (
    <div className="pb-5 px-5 bg-accent">
      <h2 className="font-bold text-center text-secondary text-3xl py-3 text-primary">
        Business Summary
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {summary.map((sum) => (
          <Summery key={sum._id} sum={sum}></Summery>
        ))}
      </div>
    </div>
  );
};

export default BusinessSummary;
