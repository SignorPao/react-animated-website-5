import React from "react";

// import components
import Nav from "./Nav";

// import logo
import Logo from "../assets/logo.svg";

// import icons
import { HiMenu } from "react-icons/hi";

const Header = ({ setNavMobile }) => {
  return (
    <header
      className="py-6"
      data-aos="fade-down"
      data-aos-duration="2000"
      data-aos-delay="900"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* logo */}
          <a href="#">
            <img src={Logo} alt="logo" className="h-[30px]" />
          </a>

          {/* nav */}
          <Nav />

          {/* nav mobile burger */}
          <HiMenu
            className="lg:hidden text-3xl text-white cursor-pointer"
            onClick={() => setNavMobile(true)}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
