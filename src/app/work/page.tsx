import { works } from "@/data/works";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Work | Ensio Creative - Branding and Design Agency",
};

const work = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto grid p-4 lg:grid-cols-2 gap-8 md:my-[100px] my-[60px]">
        <div className="md:text-[70px] text-[50px] md:leading-18 leading-10 uppercase md:mb-[70px]">
          Crafted Experiences
        </div>
        <div className="mt-auto text-lg md:mb-[70px]">
          From insight to execution, these projects show how bold thinking,
          human-centered strategy, and purposeful design come together to create
          brands that last.
        </div>
        {works.map((work) => (
          <div key={work.title} className="">
            <Link href={`/work/${work.link}`}>
              <img src={work.image} alt={work.title} className="mb-4 " />
              <h3 className="text-xl uppercase">{work.title}</h3>
            </Link>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 md:pb-16 md:py-10">
        <Link href="/studio">
          <div className="bg-gray-100 h-[500px] flex justify-center items-center">
            <span className="text-[40px] md:text-[90px] font-bold">
              STUDIO
            </span>
          </div>
        </Link>
      </div>
    </>
  );
};

export default work;
