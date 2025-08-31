import { ReactLenis } from "lenis/react";
import HomePage from "./pages/HomePage";
import PortfolioProvider from "./context/PortfolioProvider";

const App = () => {
  return (
    <ReactLenis root>
      <PortfolioProvider>
        <HomePage />
      </PortfolioProvider>
    </ReactLenis>
  );
};

export default App;
