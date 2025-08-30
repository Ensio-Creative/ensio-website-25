import React from "react";

const FooterNav = () => {
  return (
    <footer id="contact" className="bg-black text-white py-16 px-6 text-center">
      <div className="text-3xl md:text-[96px] mb-4">
        HAVE
        <br />
        AN IDEA?
      </div>
      <button className="border border-white rounded-full px-8 pt-4 pb-3 text-2xl md:text-[96px] font-medium hover:bg-white hover:text-black transition mb-8">
        LET&apos;S TALK
      </button>
      <div className="flex justify-center space-x-12 text-sm my-10">
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
      <div className="text-sm text-[#ABB8C3] border-t border-[#272727] pt-14">
        © 2025 Ensio Creative. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterNav;
