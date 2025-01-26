import React from "react";
import bannerImage from "../assets/images/banner-bg.jpg"; // Background image for banner
import rightSideImage from "../assets/images/man-with-laptop.png"; // Image of man holding the laptop
import leftSideImage from "../assets/images/man-with-laptop.png"; // Image for the left side of the second section

export default function HomeBanner() {
  return (
    <div>
      {/* First Section - Home Banner */}
      <div
        className="relative bg-cover bg-center h-[400px] sm:h-[500px] lg:h-[600px]"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay to darken the background image */}
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row items-center justify-between h-full text-white">
          {/* Left Side - Text and Button */}
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
            <p className="text-lg md:text-2xl">
              Your trusted partner for quality network testing and performance monitoring.
            </p>
            <h1 className="text-3xl sm:text-4xl font-semibold">
              Network Benchmark Testing
            </h1>
            <button className="mt-6 px-6 py-2 bg-[#fb8501] text-white font-medium rounded-md hover:bg-[#f77f1a] transition duration-300">
              Talk to an Expert
            </button>
          </div>

          {/* Right Side - Diamond-Shaped Image */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center items-center relative">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-96 md:h-96 clip-diamond overflow-visible">
              <img
                src={rightSideImage}
                alt="Man holding laptop"
                className="w-full h-full object-cover diamond-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Reverse Layout with Blue Background */}
      <div className="relative bg-blue-600 h-[400px] sm:h-[500px] lg:h-[600px]">
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row-reverse items-center justify-between h-full text-white">
          {/* Right Side - Heading and Paragraph */}
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-semibold">
              Seamless Connectivity Solutions
            </h1>
            <p className="text-lg md:text-2xl">
              Our expertise ensures unmatched connectivity with robust, scalable network designs.
            </p>
          </div>

          {/* Left Side - Diamond-Shaped Image */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center items-center relative">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-96 md:h-96 clip-diamond overflow-visible">
              <img
                src={leftSideImage}
                alt="Network connectivity image"
                className="w-full h-full object-cover diamond-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
