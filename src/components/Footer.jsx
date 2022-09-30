import React from "react";

// import logo
import Logo from "../assets/logo.svg";

const Footer = () => {
  // get current year
  const year = new Date().getFullYear();

  return (
    <div className="container mx-auto w-full py-6 flex items-center justify-center flex-col gap-y-4 lg:flex-row lg:justify-between lg:mb-6 font-secondary">
      <div className="flex gap-x-2 items-center justify-center text-sm">
        &copy; {year}
        <a href="#">
          <img src={Logo} alt="logo" className="h-[12px]" />
        </a>
        All rights reserved.
      </div>
      <p className="text-sm">
        Created by{" "}
        <a
          href="https://github.com/SignorPao"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#b936f5] transition"
        >
          @signorPao
        </a>
      </p>
    </div>
  );
};

export default Footer;
