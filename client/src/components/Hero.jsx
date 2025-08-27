import React from "react";

const Hero = ({ badges }) => {
  return (
    <div className=" my-[10%] mx-5 flex justify-between items-center px-4 ">
      <div className="flex flex-col text-white max-w-2xl hero-left ">
        <div className="flex flex-wrap gap-3 mb-6 hero-row-1">
          {badges.map((val, idx) => (
            <button
              className="px-4 py-2 border border-gray-300 rounded-full 
                bg-gray-100/15 text-sm hover:bg-gray-100/25 transition-all"
              key={idx}
            >
              {val}
            </button>
          ))}
        </div>
        <div className="space-y-6 hero-row-2">
          <h1 className="text-6xl font-bold animate-fade-in">
            Hi, I&apos;m Pranshu Pandey
          </h1>
          <p className="text-xl leading-relaxed text-gray-300">
            I craft exceptional digital experiences through clean code and
            innovative solutions. Specializing in modern web technologies with
            5+ years of experience building scalable applications.
          </p>
          <div className="flex gap-4 pt-4">
            <a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 
              transition-colors px-6 py-3 rounded-lg font-medium"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="border border-gray-300 px-6 py-3 
              rounded-lg hover:bg-gray-100/15 transition-colors font-medium"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:block hero-right">
        {/* Add your hero image or illustration here */}
      </div>
    </div>
  );
};

export default Hero;
