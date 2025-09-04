import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  CircleUser,
  Code,
  Linkedin,
  Github,
  Mail,
  ChevronsDown,
} from "lucide-react";

// A reusable Button component for consistency
const Button = ({ href, children, variant = "primary" }) => {
  const baseClasses =
    "px-3 py-2 rounded-lg text-sm transition-colors flex justify-center items-center font-bold gap-4";
  const variants = {
    primary: "bg-white text-black hover:bg-white/30",
    secondary: "border border-gray-300 hover:bg-gray-100/15",
  };

  const Component = href ? "a" : "button";

  return (
    <Component href={href} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </Component>
  );
};

const Hero = ({ badges = [] }) => {
  const container = React.useRef(null);

  // Use a single GSAP hook with a timeline for sequencing animations
  useGSAP(
    () => {
      gsap.from(".hero-animate > *", {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="mt-[10%]  sm:mt-[4%] flex flex-col w-full justify-between gap-10 items-center sm:px-10"
    >
      {/*  below is hero dev image container */}

      <div className="flex flex-col text-white items-center justify-between gap-5 sm:px-5 sm:py-3">
        {/* REMOVED the opacity-0 and translate-y-10 classes from here */}
        <div className="flex flex-wrap justify-center gap-2">
          {badges.map((val, idx) => (
            <button
              className="px-2 py-1 border border-gray-300 rounded-full bg-gray-100/15 text-[0.8rem] hover:bg-gray-100/25 transition-all"
              key={idx}
            >
              {val}
            </button>
          ))}
        </div>

        <div className="space-y-6 hero-animate text-center">
          <h1 className="text-6xl sm:text-4xl sm:font-semibold font-bold">
            Hi, I&apos;m Pranshu Pandey
          </h1>
          <p className="text-lg sm:text-md leading-relaxed text-gray-300 max-w-2xl text-center">
            I craft exceptional digital experiences through clean code and
            innovative solutions. Specializing in modern web technologies with
            5+ years of experience building scalable applications.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3  pt-4 hero-animate w-full sm:w-auto">
          <Button href="#contact">
            <span>Get in Touch</span>
            <CircleUser strokeWidth={2.55} />
          </Button>
          <Button href="#projects" variant="secondary">
            <span>View My Work</span>
            <Code strokeWidth={2.545} />
          </Button>
        </div>
        <div className="flex gap-5 items-center justify-center my-4 w-full">
          <div className="p-3 hover:bg-gray-600/30 rounded-lg cursor-pointer transition-colors duration-150 ease-linear">
            <Linkedin strokeWidth={2.25} size={24} />
          </div>
          <div className="p-3 hover:bg-gray-600/30 rounded-lg cursor-pointer transition-colors duration-150 ease-linear">
            <Github strokeWidth={2.25} size={24} />
          </div>
          <div className="p-3 hover:bg-gray-600/30 rounded-lg cursor-pointer transition-colors duration-150 ease-linear">
            <Mail strokeWidth={2.25} size={24} />
          </div>
        </div>
      </div>
      <div className="relative flex justify-center w-full items-center">
        <div className="rounded-full border-4 w-50 h-50 sm:w-2/5 sm:h-2/5 border-gray-200/70 overflow-hidden z-10 ">
          <img
            src="/Pranshu_Photo.jpg"
            className=" h-full w-full object-cover object-top  brightness-75"
            alt="Pranshu Pandey"
          />
        </div>
        <div className="absolute bg-orange-200/30 sm:w-2/3 sm:h-1/3 sm:-rotate-[50deg] sm:skew-12  h-47 sm:animate-none sm:blur-3xl animate-pulse w-52 rounded-full blur-xl [20%]"></div>
      </div>
      <div className="items-center justify-center mt-2  hidden sm:flex cursor-pointer">
        <div className="animate-bounce">
          <ChevronsDown
            className="stroke-[0.76 rem] fill-amber-100 "
            size={62}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
