import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { TopNav } from "./components/topNav/TopNav";
import { LandingPage } from "./pages/landingPage/LandingPage";
import { IRC } from "./pages/IRC";
import { American_heart_association } from "./pages/American_heart_association";
import { Transparent_hand } from "./pages/Transparent_hand";
import { Care_international } from "./pages/Care_international";
import { Apopo } from "./pages/Apopo";
import { Ashoka } from "./pages/Ashoka";
import { Popup } from "./components/popup/Popup";

function App() {
  const [donatePopup, setDonatePopup] = useState({
    open: false,
    text: "",
  });
  return (
    <Router basename={"/fiserv-poc"}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <TopNav />
            <LandingPage />
          </Route>
          <Route exact path="/irc">
            <IRC setDonatePopup={setDonatePopup} />
          </Route>
          <Route exact path="/american_heart_association">
            <American_heart_association setDonatePopup={setDonatePopup} />
          </Route>
          <Route exact path="/transparent_hand">
            <Transparent_hand setDonatePopup={setDonatePopup} />
          </Route>
          <Route exact path="/care_international">
            <Care_international setDonatePopup={setDonatePopup} />
          </Route>
          <Route exact path="/apopo">
            <Apopo setDonatePopup={setDonatePopup} />
          </Route>
          <Route exact path="/ashoka">
            <Ashoka setDonatePopup={setDonatePopup} />
          </Route>
        </Switch>
      </div>
      {donatePopup.open && (
        <Popup close={() => setDonatePopup({ open: false, text: "" })}>
          <h2>Thanks for donating to {donatePopup.text}</h2>
        </Popup>
      )}
    </Router>
  );
}

export default App;
