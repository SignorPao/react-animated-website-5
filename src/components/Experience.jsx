import React from "react";

// import images
import Img1 from "../assets/exp-img1.png";
import Img2 from "../assets/exp-img2.png";

const Experience = () => {
  return (
    <section className="mb-12 lg:mb-24">
      <div className="container mx-auto">
        <div className="flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row">
          <div className="flex-1 flex space-x-6 items-center lg:space-x-12">
            {/* images */}
            <div
              className="self-start"
              data-aos="fade-down"
              data-aos-offset="100"
              data-aos-delay="400"
            >
              <img src={Img1} alt="experience" />
            </div>
            <div
              className="self-end"
              data-aos="fade-up"
              data-aos-offset="100"
              data-aos-delay="200"
            >
              <img src={Img2} alt="experience" />
            </div>
          </div>

          {/* text */}
          <div className="flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0">
            <h2
              className="text-3xl font-bold mb-6"
              data-aos="fade-left"
              data-aos-delay="100"
            >
              New Experience In Playing Games
            </h2>
            <p
              className="font-secondary mb-6"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem minima doloribus consectetur sunt beatae sint quae
              labore numquam repellendus. Repellendus!
            </p>
            <button 
              className="btn" 
              data-aos="fade-left" 
              data-aos-delay="500"
            >
              Get it now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
