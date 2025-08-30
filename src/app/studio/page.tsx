import React from "react";
import Marquee from "react-fast-marquee";

const studio = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto grid p-4 lg:grid-cols-2 gap-8 my-6">
        <div className="md:text-[70px] text-3xl uppercase leading-18">
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
        <Marquee >{[1,2,3,4,5].map((item) => (
          <img className="mx-2" key={item} src={`/images/slide/img-${item}.png`} />
        ))}</Marquee>
      </div>
    </div>
  );
};

export default studio;
