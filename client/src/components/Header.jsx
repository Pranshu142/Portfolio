import React, { useRef, useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  const headerItems = ["Home", "About", "Skills", "Projects", "Contacts"];
  const navRoutes = useRef(null);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useGSAP(() => {
    // Mobile only animation
    if (window.innerWidth < 768) {
      if (isNavOpen) {
        gsap.fromTo(
          navRoutes.current,
          { display: "none", opacity: 0, y: -20 },
          {
            display: "flex",
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: "power2.inOut",
          }
        );
      } else {
        gsap.to(navRoutes.current, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power2.inOut",
          onComplete: () => gsap.set(navRoutes.current, { display: "none" }),
        });
      }
    }
  }, [isNavOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        gsap.set(navRoutes.current, {
          clearProps: "all", // saare inline styles remove karega (display, opacity, transform, etc.)
        });
      }
    };

    window.addEventListener("resize", handleResize);

    // Run once on mount
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const togglePannel = () => setIsNavOpen((prev) => !prev);

  const handleScrollIntoViewHeader = (e, idx) => {
    e.preventDefault();
    const ele = document.getElementById(`${idx}`);
    if (ele) {
      ele.scrollIntoView({
        behavior: "smooth",
        inline: "nearest",
        block: "start",
      });
    }

    if (window.innerWidth < 768) {
      setIsNavOpen(false);
    }
  };

  return (
    <div className="w-full px-5 pt-5 text-white flex justify-between items-center font-serif border-b border-gray-500 pb-5 fixed top-0 left-0 right-0 bg-gray-800/20 backdrop-blur-lg z-20">
      <div className="font-bold">Pranshu Pandey</div>

      {/* Navigation */}
      <div
        ref={navRoutes}
        className="hidden md:flex flex-col md:flex-row gap-4 absolute md:static top-full right-5 mt-2 md:mt-0 p-5 md:p-0 rounded-lg md:rounded-none shadow-lg md:shadow-none bg-gray-800/90 md:bg-transparent"
      >
        {headerItems.map((val, idx) => (
          <a
            key={idx}
            href={`#${val.toLowerCase()}`}
            className="cursor-pointer w-full hover:text-gray-300"
            onClick={(e) => handleScrollIntoViewHeader(e, val.toLowerCase())}
          >
            {val}
          </a>
        ))}
      </div>

      {/* Toggle Button */}
      <div
        className="z-20 cursor-pointer md:hidden"
        onClick={togglePannel}
        aria-expanded={isNavOpen}
        aria-controls="nav-menu"
      >
        {isNavOpen ? <X /> : <Menu />}
      </div>
    </div>
  );
};

export default Header;
