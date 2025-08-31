import { createContext, useState } from "react";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Portfolio data
  const portfolioData = {
    name: "Pranshu Pandey",
    title: "Full Stack Developer",
    badges: ["Full Stack Developer", "DevOps", "ML Engineer"],
    socialLinks: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/your-profile",
      email: "your-email@example.com",
    },
    contact: {
      email: "your-email@example.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
    },
  };

  const value = {
    theme,
    setTheme,
    isNavOpen,
    setIsNavOpen,
    activeSection,
    setActiveSection,
    portfolioData,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;
