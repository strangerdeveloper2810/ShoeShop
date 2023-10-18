import React from "react";
import Home from "./home";

const App: React.FC = () => {
  return (
    <main>
      <Home />
    </main>
  );
};

export default React.memo(App);
