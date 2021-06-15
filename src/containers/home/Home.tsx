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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit
          pellentesque habitant morbi tristique senectus et. Est sit amet
          facilisis magna. Enim eu turpis egestas pretium aenean pharetra magna
          ac placerat.Elit pellentesque habitant morbi tristique senectus et.
          Est sit amet facilisis magna. Enim eu turpis egestas pretium aenean
          pharetra magna ac placerat.
        </div>
        <button>Read More</button>
      </div>
    </div>
  );
};
