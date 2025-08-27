import React from "react";
import { ReactLenis } from "lenis/react";
import HomePage from "./pages/HomePage";

const App = () => {
  // const _lenis = useLenis((lenis) => {
  //   console.log(lenis);
  // });
  return (
    <ReactLenis root>
      <HomePage />
    </ReactLenis>
  );
};

export default App;
