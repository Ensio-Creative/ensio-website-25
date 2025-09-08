export const metadata = {
  title: "Studio | Ensio Creative - Branding and Design Agency",
};
import React from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const studio = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto grid p-4 lg:grid-cols-2 gap-8 md:my-[100px] my-[60px]">
        <div className="md:text-[70px] text-[50px] uppercase md:leading-18 leading-10">
          <p> Forging brands that move and endure.</p>
        </div>
        <div className="text-lg">
          We’re a strategy-led branding and design agency helping ambitious
          brands cut through the noise and stay relevant for years to come.
          Whether launching something new or redefining what already exists, we
          partner with visionaries to clarify purpose, challenge convention, and
          build bold brands that last.
          <br /> <br />
          Rooted in insight and driven by imagination, we forge brands that move
          - beyond theory into action. We turn brand truth into living systems
          for growth - aligning business goals with human-centered experiences
          that inspire, connect, and scale. From strategy to execution, we
          design for what next - and what lasts.
        </div>
      </div>
      <div>
        <Marquee>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <img
              className="mx-2"
              key={item}
              src={`/images/slide/img-${item}.png`}
            />
          ))}
        </Marquee>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 md:py-[100px] py-[80px]">
        <h2 className="text-[35px] md:text-[70px] mb-10 uppercase md:leading-18 leading-10">
          Our <br /> Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="col-span-2 grid md:grid-cols-2 border-y border-y-[#ECECEC] py-12">
            <span className="text-xl md:mb-0 mb-4 font-bold tracking-widest">
              01 BRAND STRATEGY
            </span>
            <ul className="mt-2 space-y-1 md:text-[30px] text-xl font-normal">
              <li>BRAND POSITIONING</li>
              <li>BRAND NAMING</li>
              <li>BRAND STORYTELLING</li>
              <li>DESIGN RESEARCH</li>
              <li>AUDIENCE PROFILING</li>
              <li>EXPERIENCE STRATEGY</li>
              <li>DIGITAL STRATEGY</li>
            </ul>
          </div>
          <div className="col-span-2 grid md:grid-cols-2 border-b border-b-[#ECECEC] py-12">
            <span className="text-xl md:mb-0 mb-4 font-bold tracking-widest">
              02 BRAND IDENTITY
            </span>
            <ul className="mt-2 space-y-1 text-xl md:text-[30px] font-normal">
              <li>BRAND IDENTITY DESIGN</li>
              <li>VERBAL IDENTITY</li>
              <li>BRAND & PRODUCT NAMING</li>
              <li>BRAND RESEARCH</li>
              <li>BRAND ARCHITECTURE</li>
              <li>BRAND GUIDELINES</li>
              <li>ART DIRECTION</li>
              <li>MOTION DESIGN</li>
            </ul>
          </div>
          <div className="col-span-2 grid md:grid-cols-2 border-b border-b-[#ECECEC] py-12">
            <span className="text-xl md:mb-0 mb-4 font-bold tracking-widest">
              03 BRAND CULTURE
            </span>
            <ul className="mt-2 space-y-1 md:text-[30px] text-xl font-normal">
              <li>CULTURE STRATEGY</li>
              <li>CORE VALUES & BEHAVIORS</li>
              <li>EMPLOYEE EXPERIENCE DESIGN</li>
              <li>INTERNAL COMMUNICATION</li>
              <li>BRAND TRAINING</li>
            </ul>
          </div>
          <div className="col-span-2 grid md:grid-cols-2 border-b border-b-[#ECECEC] py-12">
            <span className="text-xl md:mb-0 mb-4 font-bold tracking-widest">
              04 BRAND DIGITAL EXPERIENCE
            </span>
            <ul className="mt-2 space-y-1 md:text-[30px] text-xl font-normal">
              <li>USER INTERFACE DESIGN</li>
              <li>USER EXPERIENCE DESIGN</li>
              <li>WEB DESIGN & DEVELOPMENT</li>
              <li>MOBILE APP DESIGN</li>
              <li>PRODUCT PROTOTYPING</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Founders Section */}
      <div className="max-w-7xl mx-auto px-4 md:py-16 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h2 className="text-[35px] md:text-[70px] md:leading-18 leading-10 uppercase">
              Meet the Founders
            </h2>
          </div>
          <div className="flex flex-col">
            <img
              src="/images/founders/gabriel.png"
              alt="Gabriel Ugochukwu"
              className="w-full h-[500px] object-cover mb-4"
            />
            <div className="mt-2">
              <div className="font-bold text-xl tracking-widest">
                GABRIEL UGOCHUKWU
              </div>
              <div className="text-lg text-gray-500">
                FOUNDER & STRATEGY DIRECTOR
              </div>
            </div>
          </div>
          <div className="flex flex-col md:mt-0 mt-4">
            <img
              src="/images/founders/rhema.png"
              alt="Rhema Borico"
              className="w-full h-[500px] object-cover mb-4"
            />
            <div className="mt-2">
              <div className="font-bold text-xl tracking-widest">
                RHEMA BORICO
              </div>
              <div className="text-lg text-gray-500">CO-FOUNDER</div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Work Button Section */}

      <div className="max-w-7xl mx-auto px-4 md:pb-16 md:py-10">
        <Link href="/work">
          <div className="bg-gray-100 h-[500px] flex justify-center items-center">
            <span className="text-[40px] md:text-[90px] font-bold">OUR WORK</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default studio;
