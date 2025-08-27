import React from "react";
import { Menu } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Header = () => {
  const headerItems = ["Home", "About", "Skills", "Projects", "Contacts"];
  const navRoutes = React.useRef(null);
  const menuIcon = React.useRef(null);
  const [navPannel, setNavPannel] = React.useState(false);

  useGSAP(() => {
    if (navPannel) {
      gsap.to(navRoutes.current, {
        display: "flex",
      });
      gsap.to(menuIcon.current, {
        display: "",
      });
    } else {
      gsap.to(navRoutes.currernt, {
        display: "none",
      });
    }
  });

  const tooglePannel = (navPannel) => {
    setNavPannel(!navPannel);
  };

  return (
    <div className="w-full px-5 pt-5 text-white flex justify-between gap-2 items-center font-serif border-b-2 border-gray-800 pb-5">
      <div className="font-bold">Pranshu Pandey</div>
      <div className="hidden gap-5 justify-center" ref={navRoutes}>
        {headerItems.map((val, idx) => (
          <div key={idx}>{val}</div>
        ))}
      </div>
      <Menu ref={menuIcon} onClick={() => tooglePannel(!navPannel)} />
    </div>
  );
};

export default Header;
