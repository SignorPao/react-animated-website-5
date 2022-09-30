import React from "react";

// import components
import Users from "../components/Users";

// import image
import Img from "../assets/banner-img.png";

const Banner = () => {
  return (
    <section className="min-h-[600px] py-12 text-center relative 2xl:py-24 lg:text-left">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* text */}
          <div>
            <h1
              className="text-3xl lg:text-5xl font-bold mb-8 lg:leading-snug"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              Let's Explore <br /> Three-Dimensional Visually.
            </h1>
            <p
              className="font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              repellat impedit quisquam maiores velit voluptates!
            </p>

            {/* buttons */}
            <div
              className="flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              <button className="btn">Get it now</button>
              <a
                href="#!"
                className="border-b-2 border-transparent hover:border-white transition ease-out"
              >
                Explore Device
              </a>
            </div>

            <Users />
          </div>

          {/* image */}
          <div data-aos="fade-up" data-aos-delay="800">
            <img src={Img} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
