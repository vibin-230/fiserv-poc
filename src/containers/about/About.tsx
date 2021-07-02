import AboutImg from "../../assets/aboutImg.webp";
import "./About.css";

export const About = () => {
  return (
    <div className="section_wrapper">
      <div className="about_wrapper">
        <div>
          <div className="about_title">Welcome to our charity</div>
          <span className="about_content">
            Our impact is about more than moving money to where it’s needed
            most; it’s also about helping nonprofits access information and
            ideas that will help them listen, learn, and grow.
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
