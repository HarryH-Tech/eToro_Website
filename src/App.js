import React from "react";

//Import Custom Components
import Header from "./components/Header";
import Menu from "./components/Menu";
import Introduction from "./components/Introduction";
import Investments from "./components/Investments";

import Footer from "./components/Footer";

//Import Base Styling
import "./assets/styles.css";

//Import Components Needed For Routing
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Menu />
        <Switch>
          <Route path="/" component={Introduction} exact />
          <Route path="/investments" component={Investments} exact />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
