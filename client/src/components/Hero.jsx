import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CircleUser, Code } from "lucide-react";

// A reusable Button component for consistency
const Button = ({ href, children, variant = "primary" }) => {
  const baseClasses =
    "px-3 py-2 rounded-lg text-sm transition-colors flex font-bold gap-4";
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
      className="my-[10%] mx-1 flex flex-col w-full justify-between gap-10 items-center px-4"
    >
      <div className="rounded-full border-6 border-gray-400/20 overflow-hidden ">
        <img
          src="/Pranshu_Photo.jpg"
          className="z-40 h-[200px] w-[200px] object-cover object-top  brightness-75 saturate-150 sepia-[1.22rem]"
          alt="Pranshu Pandey"
        />
      </div>
      <div className="flex flex-col text-white items-start justify-between ">
        {/* REMOVED the opacity-0 and translate-y-10 classes from here */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {badges.map((val, idx) => (
            <button
              className="px-2 py-1 border border-gray-300 rounded-full bg-gray-100/15 text-[0.8rem] hover:bg-gray-100/25 transition-all"
              key={idx}
            >
              {val}
            </button>
          ))}
        </div>

        <div className="space-y-6 hero-animate text-start">
          <h1 className="text-6xl font-bold">Hi, I&apos;m Pranshu Pandey</h1>
          <p className="text-xl leading-relaxed text-gray-300 max-w-2xl text-justify">
            I craft exceptional digital experiences through clean code and
            innovative solutions. Specializing in modern web technologies with
            5+ years of experience building scalable applications.
          </p>
        </div>
        <div className="flex justify-between gap-4 pt-4 hero-animate">
          <Button href="#contact">
            Get in Touch
            <CircleUser strokeWidth={2.55} />
          </Button>
          <Button href="#projects" variant="secondary">
            View My Work
            <Code strokeWidth={2.545} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
