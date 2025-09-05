import React from "react";
import Link from "next/link";

const ContactPage = () => (
  <main className="bg-white min-h-screen text-black">
    {/* Main Contact Section */}
    <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 px-4 items-start">
      <h1 className="text-4xl md:text-[70px] mb-8">LET’S TALK</h1>
      <div className="flex flex-col gap-6 md:mt-8">
        <p className="text-base md:text-lg">
          It all starts with a conversation to understand your goals and needs
          whether you’re starting from scratch or scaling what already exists,
          we’d love to hear from you.
        </p>
        <p className="text-base md:text-lg">
          We collaborate with team who care about clarity, craft, and impact -
          and want to build with purpose.
        </p>
        <div className="mt-4 mb-2">
          <a
            href="mailto:hello@ensiocreative.co"
            className="block text-2xl md:text-3xl font-normal mb-2 hover:underline"
          >
            hello@ensiocreative.co
          </a>
          <a
            href="tel:+2347039644259"
            className="block text-2xl md:text-3xl font-normal mb-2 hover:underline"
          >
            +234 703 964 4259
          </a>
        </div>
        <p className="md:text-lg text-gray-700">
          We are a 100% remote agency, collaborating with clients worldwide.
        </p>
      </div>
    </section>

    {/* Our Work Button Section */}
    <div className="max-w-7xl mx-auto px-4 pb-16 py-10">
      <Link href="/work">
        <div className="bg-gray-100 h-[500px] flex justify-center items-center">
          <span className="text-3xl md:text-[90px] font-bold">OUR WORK </span>
        </div>
      </Link>
    </div>
  </main>
);

export default ContactPage;
