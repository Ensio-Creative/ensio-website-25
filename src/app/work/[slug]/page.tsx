export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const titles: Record<string, string> = {
    "doklus-green": "Doklus Green | Ensio Creative - Branding and Design Agency",
    "tescat-engineering": "Tescat Engineering | Ensio Creative - Branding and Design Agency",
    "emmproff-integrated": "Emmproff Integrated | Ensio Creative - Branding and Design Agency",
    "south-atlantic-offshore": "South Atlantic Offshore | Ensio Creative - Branding and Design Agency",
    "vicmorrow-foundation": "Vicmorrow Foundation | Ensio Creative - Branding and Design Agency",
    "nonyworld-global-resources": "Nonyworld Global Resources | Ensio Creative - Branding and Design Agency",
    "bonjuli": "BonJuli | Ensio Creative - Branding and Design Agency",
    "un-properties": "UN Properties | Ensio Creative - Branding and Design Agency",
  };
  return {
    title: titles[slug] || "Work | Ensio Creative - Branding and Design Agency",
  };
}
import React from "react";
import { works } from "@/data/works";
import { notFound } from "next/navigation";
import Link from "next/link";

interface SingleWorkProps {
  params: {
    slug: string;
  };
}

const SingleWork = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const work = works.find((w) => w.link === slug);
  if (!work) return notFound();

  return (
    <main className="max-w-7xl mx-auto md:pt-[100px] pt-[60px] md:pb-16 px-4">
      <div className="lg:grid lg:grid-cols-2 md:gap-4">
        <div>
          <h1 className="text-[50px] md:text-[70px] uppercase md:leading-18 leading-10 mb-8">
            {work.title}
          </h1>
        </div>
        <div></div>
        <img
          src={`/images/projects/${work.link}/cover-img.png `}
          alt={work.title}
          className="w-full md:h-auto object-cover h-80 mb-12 col-span-2"
        />
        <div className="md:mb-12 mb-10">
          <p className="text-lg md:text-wrap text-nowrap">PROJECT OVERVIEW</p>

          <div className="md:flex flex-col justify-end h-full md:-mt-10 mt-10 w-full">
            <p className="md:text-base text-sm md:text-wrap text-nowrap uppercase">
              Industry <br /> {work.industry}
            </p>
            <p className="text-sm md:text-base uppercase md:text-wrap text-pretty mt-4">
              Scope of work <br /> {work.scope}
            </p>
          </div>
        </div>
        <div className="h-full md:mt-0 mt-4 mb-12 md:text-base text-sm">
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: work.description }}
          />
        </div>
        {work.images.map(
          (single: { class: string; name: string }, index: number) => (
            <div key={index} className={`${single.class} w-full md:my-0 my-3`}>
              <img
                className="w-full object-cover"
                src={`/images/projects/${work.link}/${single.name}.png`}
                alt=""
              />
            </div>
          )
        )}
      </div>
      <div className="md:mt-32 mt-14">
        {/* Next Project Preview */}
        {(() => {
          const currentIndex = works.findIndex((w) => w.link === slug);
          const nextIndex = (currentIndex + 1) % works.length;
          const nextWork = works[nextIndex];
          if (!nextWork || nextWork.link === slug) return null;
          return (
            <Link
              href={`/work/${nextWork.link}`}
              className="block group pt-12 md:pb-12 border-t border-t-[#ECECEC]"
            >
              <div className="">
                <span className="text-lg md:text-2xl">
                  Next Project - {nextWork.title}
                </span>

                <img
                  src={`/images/projects/${nextWork.link}/next-project.png`}
                  alt={nextWork.title}
                  className="object-cover my-4 md:h-auto h-52"
                />
              </div>
            </Link>
          );
        })()}
      </div>
    </main>
  );
};

export default SingleWork;
