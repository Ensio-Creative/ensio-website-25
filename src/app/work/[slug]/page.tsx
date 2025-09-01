import React from "react";
import { works } from "@/data/works";
import { notFound } from "next/navigation";

interface SingleWorkProps {
  params: {
    slug: string;
  };
}

const SingleWork = ({ params }: SingleWorkProps) => {
  const { slug } = params;
  const work = works.find((w) => w.link === slug);
  if (!work) return notFound();

  return (
    <main className="max-w-7xl mx-auto py-16 px-4">
      <div className="grid md:grid-cols-2 gap-4">
        <h1 className="text-3xl md:text-[70px] mb-8">{work.title}</h1>
        <div></div>
        <img
          src={work.image}
          alt={work.title}
          className="w-full h-auto mb-8 col-span-2"
        />
        <div>
          <p className="text-xl">PROJECT OVERVIEW</p>
        </div>
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: work.description }}
        />
        {work.images.map((single, index) => (
          <img
            key={index}
            className={`${single.class} w-full`}
            src={`/images/projects/${work.link}/${single.name}.png`}
            alt=""
          />
        ))}
      </div>
    </main>
  );
};

export default SingleWork;
