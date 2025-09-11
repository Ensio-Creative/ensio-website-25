export async function generateStaticParams() {
  return [
    { slug: "doklus-green" },
    { slug: "tescat-engineering" },
    { slug: "emmproff-integrated" },
    { slug: "south-atlantic-offshore" },
    { slug: "vicmorrow-foundation" },
    { slug: "nonyworld-global-resources" },
    { slug: "bonjuli" },
    { slug: "un-properties" },
  ];
}
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  interface ProjectMetadata {
    title: string;
    description: string;
  }

  const metadata: Record<string, ProjectMetadata> = {
    "doklus-green": {
      title: "Doklus Green | Ensio Creative - Branding and Design Agency",
      description: "Discover our branding work for Doklus Green - Innovative sustainable solutions through creative design.",
    },
    "tescat-engineering": {
      title: "Tescat Engineering | Ensio Creative - Branding and Design Agency",
      description: "Explore our branding project for Tescat Engineering - Engineering excellence through visual identity.",
    },
    "emmproff-integrated": {
      title: "Emmproff Integrated | Ensio Creative - Branding and Design Agency",
      description: "View our comprehensive branding work for Emmproff Integrated - Transforming businesses through design.",
    },
    "south-atlantic-offshore": {
      title: "South Atlantic Offshore | Ensio Creative - Branding and Design Agency",
      description: "See how we helped South Atlantic Offshore establish a powerful brand identity in the maritime sector.",
    },
    "vicmorrow-foundation": {
      title: "Vicmorrow Foundation | Ensio Creative - Branding and Design Agency",
      description: "Learn about our branding project for Vicmorrow Foundation - Making an impact through purposeful design.",
    },
    "nonyworld-global-resources": {
      title: "Nonyworld Global Resources | Ensio Creative - Branding and Design Agency",
      description: "Discover our brand development work for Nonyworld Global Resources - Connecting resources worldwide.",
    },
    "bonjuli": {
      title: "BonJuli | Ensio Creative - Branding and Design Agency",
      description: "Experience our creative branding solution for BonJuli - Where style meets innovation.",
    },
    "un-properties": {
      title: "UN Properties | Ensio Creative - Branding and Design Agency",
      description: "View our brand identity work for UN Properties - Elevating real estate through design.",
    },
  };

  return {
    title: metadata[slug]?.title || "Work | Ensio Creative - Branding and Design Agency",
    description: metadata[slug]?.description || "Explore our portfolio of branding and design projects at Ensio Creative.",
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
          className="w-full md:h-auto object-cover h-64 mb-12 col-span-2"
        />
        <div className="md:mb-12 mb-10">
          <p className="text-lg md:text-wrap text-nowrap">PROJECT OVERVIEW</p>

          <div className="md:flex flex-col justify-end h-full md:-mt-10 mt-10 w-full">
            <p className="md:text-base text-sm md:text-wrap text-pretty uppercase">
              <strong>Industry</strong> <br /> {work.industry}
            </p>
            <p className="text-sm md:text-base uppercase md:text-wrap text-pretty mt-4">
              <strong>Scope of work</strong> <br /> {work.scope}
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
