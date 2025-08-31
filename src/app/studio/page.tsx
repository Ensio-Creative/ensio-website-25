import React from "react";
import Marquee from "react-fast-marquee";

const studio = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto grid p-4 lg:grid-cols-2 gap-8 my-6">
        <div className="md:text-[70px] text-3xl uppercase md:leading-18">
          <p> Forging brands that move and endure.</p>
        </div>
        <div className="">
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
          {[1, 2, 3, 4, 5].map((item) => (
            <img
              className="mx-2"
              key={item}
              src={`/images/slide/img-${item}.png`}
            />
          ))}
        </Marquee>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-[70px] mb-10 uppercase">
          Our <br /> Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="col-span-2 grid md:grid-cols-2 border-y border-y-[#ECECEC] py-8">
            <span className="text-xl font-bold tracking-widest">
              01 BRAND STRATEGY
            </span>
            <ul className="mt-2 space-y-1 md:text-[30px] text-lg font-normal">
              <li>BRAND POSITIONING</li>
              <li>BRAND NAMING</li>
              <li>BRAND STORYTELLING</li>
              <li>DESIGN RESEARCH</li>
              <li>AUDIENCE PROFILING</li>
              <li>EXPERIENCE STRATEGY</li>
              <li>DIGITAL STRATEGY</li>
            </ul>
          </div>
          <div className="col-span-2 grid md:grid-cols-2 border-b border-b-[#ECECEC] py-8">
            <span className="text-xl font-bold tracking-widest">
              02 BRAND IDENTITY
            </span>
            <ul className="mt-2 space-y-1 text-lg md:text-[30px] font-normal">
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
          <div className="col-span-2 grid md:grid-cols-2 border-b border-b-[#ECECEC] py-8">
            <span className="text-xl font-bold tracking-widest">
              03 BRAND CULTURE
            </span>
            <ul className="mt-2 space-y-1 md:text-[30px] text-lg font-normal">
              <li>CULTURE STRATEGY</li>
              <li>CORE VALUES & BEHAVIORS</li>
              <li>EMPLOYEE EXPERIENCE DESIGN</li>
              <li>INTERNAL COMMUNICATION</li>
              <li>BRAND TRAINING</li>
            </ul>
          </div>
          <div className="col-span-2 grid md:grid-cols-2 border-b border-b-[#ECECEC] py-8">
            <span className="text-xl font-bold tracking-widest">
              04 BRAND DIGITAL EXPERIENCE
            </span>
            <ul className="mt-2 space-y-1 md:text-[30px] text-lg font-normal">
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
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h2 className="text-3xl md:text-[70px] md:leading-18 uppercase">
              Meet the Founders
            </h2>
          </div>
          <div className="flex flex-col">
            <img
              src="/images/founders/gabriel.png"
              alt="Gabriel Ugochukwu"
              className="w-full h-96 object-cover mb-4"
            />
            <div className="">
              <div className="font-bold tracking-widest">
                GABRIEL UGOCHUKWU
              </div>
              <div className="text-xs text-gray-500">
                FOUNDER & STRATEGY DIRECTOR
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <img
              src="/images/founders/rhema.png"
              alt="Rhema Borico"
              className="w-full h-96 object-cover mb-4"
            />
            <div className="">
              <div className="font-bold tracking-widest">
                RHEMA BORICO
              </div>
              <div className="text-xs text-gray-500">CO-FOUNDER</div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Work Button Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gray-100 py-16 flex justify-center items-center">
          <span className="text-3xl md:text-5xl font-bold">OUR WORK</span>
        </div>
      </div>
    </div>
  );
};

export default studio;
