import React from "react";
import { Menu, X } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  const headerItems = ["Home", "About", "Skills", "Projects", "Contacts"];
  const navRoutes = React.useRef(null);
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  // This hook now only controls the animation for the navigation links
  useGSAP(() => {
    if (isNavOpen) {
      // Animate nav links IN
      gsap.to(navRoutes.current, {
        display: "flex",
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.inOut",
      });
    } else {
      // Animate nav links OUT
      gsap.to(navRoutes.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        ease: "power2.inOut",
        // Hide the element after the animation is complete for better performance
        onComplete: () => {
          gsap.set(navRoutes.current, { display: "none" });
        },
      });
    }
  }, [isNavOpen]);

  const togglePannel = () => {
    setIsNavOpen((prev) => !prev);
  };

  return (
    <div className="w-full px-5 pt-5 text-white flex justify-between gap-2 items-center font-serif border-b-3 border-gray-500 pb-5 sticky top-0 bg-gray-800/20 bgagrey-950    backdrop-blur-lg z-20">
      <div className="font-bold w-full">Pranshu Pandey</div>

      {/* This is the navigation menu that will be animated */}
      <div
        className="hidden absolute top-full right-5 mt-2 bg-gray-900 p-5 rounded-lg shadow-lg gap-4 flex-col opacity-0"
        ref={navRoutes}
      >
        {headerItems.map((val, idx) => (
          <div key={idx} className="cursor-pointer w-full hover:text-gray-300">
            {val}
          </div>
        ))}
      </div>

      {/* Toggle button - This component doesn't need to be animated */}
      <div className="z-20 cursor-pointer" onClick={togglePannel}>
        {isNavOpen ? <X /> : <Menu />}
      </div>
    </div>
  );
};

export default Header;
