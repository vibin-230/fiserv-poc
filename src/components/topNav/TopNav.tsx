import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./TopNav.css";
export const TopNav = () => {
  return (
    <nav className="TopNav_wrapper">
      <a href="#home" className="home active">
        Home
      </a>
      <a href="#about" className="about">
        About
      </a>
      <a href="#whatWeDo" className="whatWeDo">
        What we do
      </a>
      <a href="#contact" className="contact">
        Contact
      </a>
    </nav>
  );
};
