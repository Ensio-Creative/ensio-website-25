"use client";
import React, { useEffect, useState } from "react";

const Loader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-1000 ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <img
        src="/images/ensio-creative-logo.svg"
        alt="EnsioCreative Logo"
        className="w-32 h-32 object-contain"
      />
    </div>
  );
};

export default Loader;
