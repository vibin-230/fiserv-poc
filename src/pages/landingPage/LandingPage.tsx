import React from "react";
import "./LandingPage.css";
import { Route, Link } from "react-router-dom";
import { Home } from "../../containers/home/Home";
import { About } from "../../containers/about/About";
import { Contact } from "../../containers/contact/Contact";
import { WhatWeDo } from "../../containers/whatWeDo/WhatWeDo";
import { Donate } from "../../containers/donate/Donate";
import ReactFullPage from "@fullpage/react-fullpage";
import { TopNav } from "../../components/topNav/TopNav";
declare const window: any;

export const LandingPage = () => {
  let components = [
    { home: <Home /> },
    { about: <About /> },
    { whatWeDo: <WhatWeDo /> },
    { donate: <Donate /> },
    { contact: <Contact /> },
  ];
  const moveSectionDown = (section: string) => {
    window.fullpage_api.moveTo(section);
  };
  return (
    <div className="LandingPage_wrapper">
      <TopNav moveSectionDown={moveSectionDown} />
      <ReactFullPage
        scrollOverflow={true}
        navigation
        anchors={["home", "about", "whatWeDo", "donate", "contact"]}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullPage.Wrapper>
              <section id="home_section" className="section">
                <Home />
              </section>
              <section id="about_section" className="section">
                <About />
              </section>
              <section id="whatWeDo_section" className="section">
                <WhatWeDo />
              </section>
              <section id="dotate_section" className="section">
                <Donate />
              </section>
              <section id="contact_section" className="section">
                <Contact />
              </section>
            </ReactFullPage.Wrapper>
          );
        }}
      />
      {/* {components.map((a) => {
        let values = Object.entries(a).flat()[1];
        let id: any = Object.entries(a).flat()[0];
        return <section id={id}>{values}</section>;
      })} */}
    </div>
  );
};
