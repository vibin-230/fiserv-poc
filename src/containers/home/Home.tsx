import React from "react";
import homeImg from "../../assets/homeImg.webp";
import "./Home.css";
export const Home = () => {
  return (
    <div className="home_wrapper">
      <img src={homeImg} />
      <div className="img_overlay"></div>
      <div className="home_text">
        <div className="home_title">Donate</div>
        <div className="home_subTitle">for a better world</div>
        <div className="home_content">
          {" "}
          GlobalGiving connects nonprofits, donors, and companies in nearly
          every country in the world. We help fellow nonprofits access the
          funding, tools, training, and support they need to serve their
          communities.
        </div>
        <button>Read More</button>
      </div>
    </div>
  );
};
