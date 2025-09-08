import Link from "next/link";
import React from "react";

const FooterNav = () => {
  return (
    <footer id="contact" className="bg-black text-white mt-[90px] py-32 px-6 text-center">
      <div className="text-[45px] md:text-[90px] mb-4">
        HAVE
        <br />
        AN IDEA?
      </div>
      <Link href="/contact">
        <button className="border border-white rounded-full px-8 pt-4 pb-3 text-[40px] md:text-[90px] font-medium hover:bg-white hover:text-black transition mb-8">
          LET&apos;S TALK
        </button>
      </Link>
      <div className="flex justify-center md:space-x-12 space-x-3 text-sm my-10">
        <a href="#" className="hover:underline">
          FACEBOOK
        </a>
        <a href="#" className="hover:underline">
          INSTAGRAM
        </a>
        <a href="#" className="hover:underline">
          X (TWITTER)
        </a>
        <a href="#" className="hover:underline">
          LINKEDIN
        </a>
      </div>
      <div className="text-sm  border-t border-[#272727] pt-14">
        © 2025 Ensio Creative. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterNav;
