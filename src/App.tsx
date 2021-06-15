import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { TopNav } from "./components/topNav/TopNav";
import { LandingPage } from "./pages/landingPage/LandingPage";
import { DonatePage } from "./pages/donatePage/DonatePage";

function App() {
  return (
    <Router basename={"/fiserv-poc"}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <TopNav />
            <LandingPage />
          </Route>
          <Route exact path="/donate">
            <DonatePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
