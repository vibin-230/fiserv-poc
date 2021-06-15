import React, { useEffect } from "react";
import "./LandingPage.css";
import { Route, Link } from "react-router-dom";
import { Home } from "../../containers/home/Home";
import { About } from "../../containers/about/About";
import { Contact } from "../../containers/contact/Contact";
import { WhatWeDo } from "../../containers/whatWeDo/WhatWeDo";

export const LandingPage = () => {
  let components = [
    { home: <Home /> },
    { about: <About /> },
    { whatWeDo: <WhatWeDo /> },
    { contact: <Contact /> },
  ];
  useEffect(() => {
    // scroll listner
    const sections = document.querySelectorAll("section");
    const home = document.querySelector(".home");
    const about = document.querySelector(".about");
    const whatWeDo = document.querySelector(".whatWeDo");
    const contact = document.querySelector(".contact");

    const navLocation = document.querySelectorAll("nav a");

    const sectionsArray = Array.prototype.slice.call(sections, 0);

    const navLoactionArray = Array.prototype.slice.call(navLocation, 0);

    const activeLink = (cls: string) => {
      navLoactionArray.map((a) => {
        a.classList.remove("active");
        if (a.classList.contains(cls)) {
          a.classList.add("active");
        }
      });
    };

    home!.addEventListener("click", () => {
      sections[0].scrollIntoView({ behavior: "smooth" });
      activeLink("home");
    });
    about!.addEventListener("click", () => {
      sections[1].scrollIntoView({ behavior: "smooth" });
      activeLink("about");
    });
    whatWeDo!.addEventListener("click", () => {
      sections[2].scrollIntoView({ behavior: "smooth" });
      activeLink("whatWeDo");
    });
    contact!.addEventListener("click", () => {
      sections[3].scrollIntoView({ behavior: "smooth" });
      activeLink("contact");
    });

    window.addEventListener("wheel", (e) => {
      const delta = e.deltaY;
      const clickEvent = new Event("click");
      if (delta > 0) {
        if (home!.classList.contains("active")) {
          about?.dispatchEvent(clickEvent);
        } else if (about!.classList.contains("active")) {
          whatWeDo?.dispatchEvent(clickEvent);
        } else if (whatWeDo!.classList.contains("active")) {
          contact?.dispatchEvent(clickEvent);
        }
      } else if (delta < 0) {
        if (contact!.classList.contains("active")) {
          whatWeDo?.dispatchEvent(clickEvent);
        } else if (whatWeDo!.classList.contains("active")) {
          about?.dispatchEvent(clickEvent);
        } else if (about!.classList.contains("active")) {
          home?.dispatchEvent(clickEvent);
        }
      }
    });
  }, []);
  return (
    <div className="LandingPage_wrapper">
      {components.map((a) => {
        let values = Object.entries(a).flat()[1];
        let id: any = Object.entries(a).flat()[0];
        return <section id={id}>{values}</section>;
      })}
      <Link to="/donate" className="donateus_button">
        Donate Us
      </Link>
    </div>
  );
};
