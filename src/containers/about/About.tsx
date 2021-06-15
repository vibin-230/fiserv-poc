import AboutImg from "../../assets/aboutImg.webp";
import "./About.css";

export const About = () => {
  return (
    <div className="section_wrapper">
      <div className="about_wrapper">
        <div>
          <div className="about_title">Welcome to our charity</div>
          <span className="about_content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit
            pellentesque habitant morbi tristique senectus et. Est sit amet
            facilisis magna. Enim eu turpis egestas pretium aenean pharetra
            magna ac placerat.Elit pellentesque habitant morbi tristique
            senectus et. Est sit amet facilisis magna. Enim eu turpis egestas
            pretium aenean pharetra magna ac placerat.
          </span>
          <a href="#about">Read more...</a>
        </div>
        <span>
          <img src={AboutImg} />
        </span>
      </div>
    </div>
  );
};
