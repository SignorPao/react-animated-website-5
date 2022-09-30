import React from "react";

// import images
import Headset1 from "../assets/headset-1.png";
import Headset2 from "../assets/headset-2.png";
import Headset3 from "../assets/headset-3.png";
import Headset4 from "../assets/headset-4.png";

const Headsets = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container mx-auto">
        {/* title */}
        <h2
          className="text-3xl font-bold mb-6 2xl:text-center"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          Mixed Reality Headsets
        </h2>

        {/* grid */}
        <div className="grid gap-y-4 lg:grid-cols-2 lg:gap-9 2xl:">
          {/* item 1 */}
          <div className="relative 2xl:justify-self-end" data-aos="zoom-in-right" data-aos-delay="100">
            <img src={Headset1} alt="headset" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">Metaverse</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                beatae accusamus maxime impedit molestiae blanditiis?
              </p>
            </div>
          </div>

          {/* item 2 */}
          <div className="relative" data-aos="zoom-in-left" data-aos-delay="200">
            <img src={Headset2} alt="headset" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">AIoT</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                beatae accusamus maxime impedit molestiae blanditiis?
              </p>
            </div>
          </div>

          {/* item 3 */}
          <div className="relative 2xl:justify-self-end" data-aos="zoom-in-right" data-aos-delay="300">
            <img src={Headset3} alt="headset" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">HoloLens</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                beatae accusamus maxime impedit molestiae blanditiis?
              </p>
            </div>
          </div>

          {/* item 4 */}
          <div className="relative" data-aos="zoom-in-left" data-aos-delay="400">
            <img src={Headset4} alt="headset" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">TPCASST</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
                beatae accusamus maxime impedit molestiae blanditiis?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;
