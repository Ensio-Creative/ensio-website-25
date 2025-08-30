import React from "react";

const HeaderNav = () => {
  return (
    <header className="max-w-7xl mx-auto flex justify-between items-center p-4">
      <div className="font-bold text-xl">EnsioCreative</div>
      <nav className="space-x-10">
        <a href="#work" className="hover:underline">
          WORK
        </a>
        <a href="#studio" className="hover:underline">
          STUDIO
        </a>
        <a href="#contact" className="hover:underline">
          CONTACT
        </a>
      </nav>
    </header>
  );
};

export default HeaderNav;
