import { useRef } from "react";

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
    "px-4 py-1 font-bold rounded-lg text-sm  flex justify-center items-center gap-2 transition-colors duration-200 ease-in-out";
  const variants = {
    primary: "bg-white text-black hover:bg-white/90",
    secondary: "border border-gray-300 text-gray-200 hover:bg-gray-100/15",
  };

  const Component = href ? "a" : "button";

  return (
    <Component href={href} className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </Component>
  );
};

const Hero = ({ badges = [] }) => {
  const container = useRef(null);

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

  const handleScrollToAbout = () => {
    const aboutDiv = document.getElementById("about");
    if (aboutDiv) {
      aboutDiv.scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
        block: "start",
      });
    }
  };

  return (
    <>
      <div
        ref={container}
        className="flex flex-col lg:flex-row   px-4 py-20 items-center gap-10 w-full"
      >
        {/* This is the Content Container */}

        <div className="flex flex-col items-center justify-center text-white lg:items-start lg:text-start flex-1 w-full">
          <div className="flex flex-1 flex-wrap justify-center gap-2">
            {badges.map((val, idx) => (
              <button
                className="px-3  text-xs font-bold transition-colors border rounded-full border-gray-300 text-gray-200 hover:bg-gray-100/15 mb-6"
                key={idx}
              >
                {val}
              </button>
            ))}
          </div>
          <div className="space-y-6 hero-animate text-center lg:text-start">
            <h1 className="text-3xl font-bold md:text-5xl xl:text-6xl">
              Hi, I&apos;m Pranshu Pandey
            </h1>
            <p className="max-w-prose text-sm leading-relaxed text-gray-300 md:text-base">
              I craft exceptional digital experiences through clean code and
              innovative solutions. Specializing in modern web technologies with
              5+ years of experience building scalable applications.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row pt-4 hero-animate w-full sm:w-auto">
            <Button href="#contact">
              <span>Get in Touch</span>
              <CircleUser size={15} />
            </Button>
            <Button href="#projects" variant="secondary">
              <span>View My Work</span>
              <Code size={15} />
            </Button>
          </div>
          <div className="flex gap-5 items-center justify-center pt-2">
            <a
              href="#"
              className="p-3 rounded-lg transition-colors duration-150 ease-linear hover:bg-gray-600/30"
            >
              <Linkedin size={15} />
            </a>
            <a
              href="#"
              className="p-3 rounded-lg transition-colors duration-150 ease-linear hover:bg-gray-600/30"
            >
              <Github size={15} />
            </a>
            <a
              href="#"
              className="p-3 rounded-lg transition-colors duration-150 ease-linear hover:bg-gray-600/30"
            >
              <Mail size={15} />
            </a>
          </div>
        </div>

        {/* This is the Image Container */}

        <div className="relative flex items-center justify-center flex-1 w-full">
          <div className="z-10 w-64 h-64 rounded-full border-4 border-gray-200/70 overflow-hidden">
            <img
              src="/Pranshu_Photo.jpg"
              className="object-cover object-top w-full h-full brightness-75"
              alt="Pranshu Pandey"
            />
          </div>
          <div className="absolute w-52 h-52 sm:w-64 sm:h-64 skew-12 rounded-full bg-orange-700/10 -rotate-45 blur-3xl -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>
      <div className="absolute bottom-8  items-center justify-center hidden lg:flex w-full">
        <button
          className="animate-bounce hover:cursor-pointer"
          onClick={handleScrollToAbout}
        >
          <ChevronsDown color="#ffffff" absoluteStrokeWidth size={32} />
        </button>
      </div>
    </>
  );
};

export default Hero;
