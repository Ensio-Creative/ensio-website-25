import { works } from "@/data/works";
import React from "react";

const work = () => {
  return (
    <div className="max-w-7xl mx-auto grid p-4 lg:grid-cols-2 gap-8 my-6">
      <div className="md:text-[80px] text-3xl leading-tight">
        Crafted Experiences
      </div>
      <div className="mt-auto">
        From insight to execution, these projects show how bold thinking,
        human-centered strategy, and purposeful design come together to create
        brands that last.
      </div>
      {works.map((work) => (
        <div key={work.title} className="">
          <img src={work.image} alt={work.title} className="mb-4 " />
          <h3 className="text-xl uppercase">{work.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default work;
