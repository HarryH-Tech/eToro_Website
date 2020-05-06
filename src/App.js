import React from "react";

//Import Custom Components
import Header from "./components/Header";
import Menu from "./components/Menu";
import Introduction from "./components/Introduction";
import Investments from "./components/InvestmentsPage/Investments";
import FAQ from "./components/FAQ";
import Contact from "./components/ContactPage/ContactPage";
import Footer from "./components/Footer";

//Import Base Styling
import "./assets/styles.css";

//Import Components Needed For Routing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const appContainer = {
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
};

function App() {
  return (
    <div style={appContainer}>
      <Router>
        <Header />
        <Menu />
        <Switch>
          <Route path="/" component={Introduction} exact />
          <Route path="/investments" component={Investments} exact />
          <Route path="/faq" component={FAQ} exact />
          <Route path="/contact" component={Contact} exact />
        </Switch>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
