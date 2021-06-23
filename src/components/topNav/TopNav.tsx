import React from "react";
import "./TopNav.css";
export const TopNav = (props: any) => {
  return (
    <nav className="TopNav_wrapper">
      <a
        onClick={() => props.moveSectionDown("home")}
        className="home active"
        id="home_link"
      >
        Home
      </a>
      <a
        className="about"
        onClick={() => props.moveSectionDown("about")}
        id="about_link"
      >
        About
      </a>
      <a
        onClick={() => props.moveSectionDown("whatWeDo")}
        className="whatWeDo"
        id="whatWeDo_link"
      >
        What we do
      </a>
      <a
        onClick={() => props.moveSectionDown("donate")}
        className="donate"
        id="donate_link"
      >
        Donate
      </a>
      <a
        onClick={() => props.moveSectionDown("contact")}
        className="contact"
        id="contact_link"
      >
        Contact
      </a>
    </nav>
  );
};
