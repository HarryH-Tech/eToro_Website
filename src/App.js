import React from "react";

//import Custom Components
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import InvestmentStrategy from "./components/InvestmentStrategy";
import FAQ from "./components/FAQ";
import ContactMe from "./components/ContactMe";

import "./assets/base.css";

function App(props) {
  return (
    <>
      <Header />
      <AboutMe />
      <InvestmentStrategy />
      <FAQ />

      <ContactMe />
    </>
  );
}

export default App;
