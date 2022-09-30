import React, { useEffect, useState } from "react";

// import components
import Header from "./components/Header";
import Banner from "./components/Banner";
import NavMobile from "./components/NavMobile";
import Experience from "./components/Experience";
import Video from "./components/Video";
import Headsets from "./components/Headsets";
import Testimonial from "./components/Testimonial";
import Explore from "./components/Explore";
import Footer from "./components/Footer";

// import AOS
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [navMobile, setNavMobile] = useState(false);

  // aos initialization
  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
      once: true,
      easing: "ease",
      offset: 120,
    });
  });

  return (
    <div className="relative overflow-hidden before:w-[600px] before:h-[200px] before:bg-circle before:bg-no-repeat before:absolute before:-top-8 before:left-0 before:hidden before:lg:flex">
      <Header setNavMobile={setNavMobile} />
      <Banner />
      {/* mobile nav */}
      <div
        className={`${
          navMobile ? "right-0" : "-right-full"
        } fixed top-0 bottom-0 w-48 transition-all z-10`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <Experience />
      <Video />
      <Headsets />
      <Testimonial />
      <Explore />
      <Footer />
    </div>
  );
};

export default App;
