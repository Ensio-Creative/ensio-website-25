"use client";

import Marquee from "react-fast-marquee";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import { works } from "@/data/works";

export default function Home() {
  return (
    <main className="bg-white text-black">
      <section className="max-w-7xl mx-auto py-32 px-4">
        <h1 className="text-4xl md:text-[90px] md:leading-20 max-w-6xl">
          ENDURING BRANDS AREN&apos;T FOUND - THEY&apos;RE FORGED.
          <br />
          WE HELP BRANDS BECOME TIMELESS.
        </h1>
      </section>

      {/* Slider Section */}
      <section className="">
        <div className="">
          <Swiper
            modules={[Autoplay, EffectFade]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            className=""
          >
            {[
              "slide-1.png",
              "slide-2.png",
              "slide-3.png",
              "slide-4.png",
              "slide-5.png",
            ].map((img, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={`/images/slide/${img}`}
                  alt={`Slide ${idx + 1}`}
                  className="w-full  object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-12 px-4 md:flex justify-between">
        <div className="lg:w-[30%] mb-6 md:mb-0">
          <img src="/images/icons/icon.svg" alt="" />
        </div>
        <div className="lg:w-[60%]">
          <p className="md:text-[36px] text-lg leading-tight">
            We partner with ambitious brands and businesses to craft timeless,
            future-ready brands. Collaborating with visionary teams and
            strategy-driven businesses seeking sharpen positioning, define
            categories, and create brand expressions that unite people,
            accelerate growth, and build lasting influence.
          </p>
        </div>
      </section>

      <section>
        <div>
          <Marquee autoFill={true}>
            <p className="md:text-[72px]"> * Selected Work</p>
          </Marquee>
          <Marquee autoFill={true} direction="right">
            <p className="md:text-[72px]"> * Selected Work </p>
          </Marquee>
        </div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 p-4 my-6">
          {works.slice(0, 4).map((work) => (
            <div key={work.title} className="">
              <img src={work.image} alt={work.title} className="mb-4 " />
              <h3 className="text-xl uppercase">{work.title}</h3>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="border-b text-sm">SEE MORE OF OUR WORK</button>
        </div>
      </section>

      {/* Studio Section */}
      <section
        id="studio"
        className="max-w-7xl mx-auto px-4 border-t border-t-[#ECECEC] my-18 py-18"
      >
        <div className="md:flex justify-between">
          <div className="text-2xl md:text-[72px] mb-4 lg:w-[30%]">STUDIO</div>
          <div className="lg:w-[60%]">
            <div className="mb-6 md:mb-0">
              <p className="text-sm md:text-[36px] mb-4 leading-tight">
                Ensio Creative is a strategy-led branding and design agency
                helping visionary brands find clarity, build meaningful
                connections, and drive purposeful growth.
              </p>
              <p className="mb-6">
                We move with intention and think beyond trends — blending
                strategy and design to craft timeless brand experiences. From
                ambitious startups to established businesses, we help brands
                spark emotion, build meaningful connections, and achieve lasting
                growth.
              </p>
              <a href="#" className="underline">
                DISCOVER MORE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="max-w-7xl mx-auto py-12 px-4">
        <div className="text-2xl md:text-[72px] mb-6">WHAT WE DO</div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="border border-[#ECECEC] p-6">
            <div className="text-sm mb-2">
              01
              <br />
              BRAND <br /> STRATEGY
            </div>
            <div className="text-xs">
              We uncover your true strength and shape your edge with positioning
              that defines your identity, your relevance, and your direction.
            </div>
          </div>
          <div className="border border-[#ECECEC] p-6">
            <div className="text-sm mb-2">
              02
              <br />
              BRAND <br /> IDENTITY
            </div>
            <div className="text-xs">
              We build scalable identity systems that make your brand clear,
              consistent, and ready to lead with clarity and impact.
            </div>
          </div>
          <div className="border border-[#ECECEC] p-6">
            <div className="text-sm mb-2">
              03
              <br />
              BRAND <br /> CULTURE
            </div>
            <div className="text-xs">
              We bring your brand to life with culture strategy and tools that
              awaken its essence inside your organization — uniting people,
              processes, and purpose.
            </div>
          </div>
          <div className="border border-[#ECECEC] p-6">
            <div className="text-sm mb-2">
              04
              <br />
              BRAND DIGITAL <br /> EXPERIENCE
            </div>
            <div className="text-xs">
              We create cutting-edge brand and digital experience that engage
              today&apos;s audiences and keep your business ahead in a
              fast-paced world.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
