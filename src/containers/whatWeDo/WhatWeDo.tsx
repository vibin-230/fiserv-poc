import Upcomingevents from "../../assets/upcmingevent.webp";
import { Link } from "react-router-dom";
import "./WhatWeDo.css";
export const WhatWeDo = () => {
  const pages = [
    {
      id: "article1",
      img: Upcomingevents,
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elitpellentesque habitant morbi tristique senectus et.",
    },
    {
      id: "article2",
      img: Upcomingevents,
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elitpellentesque habitant morbi tristique senectus et.",
    },
    {
      id: "article3",
      img: Upcomingevents,
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elitpellentesque habitant morbi tristique senectus et.",
    },
    {
      id: "article4",
      img: Upcomingevents,
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elitpellentesque habitant morbi tristique senectus et.",
    },
    {
      id: "article5",
      img: Upcomingevents,
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elitpellentesque habitant morbi tristique senectus et.",
    },
    {
      id: "article6",
      img: Upcomingevents,
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elitpellentesque habitant morbi tristique senectus et.",
    },
    {
      id: "article7",
      img: Upcomingevents,
      title: "Lorem ipsum dolor",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elitpellentesque habitant morbi tristique senectus et.",
    },
  ];
  return (
    <div className="section_wrapper">
      <div className="whatWeDo_wrapper">
        <div>
          {pages.map((a, i) => {
            return (
              <div className="slide">
                <div className="whatWeDo_card_wrapper">
                  <img src={a.img} className="whatWeDo_img" />
                  <div>
                    <div className="whatWeDo_title">
                      {a.title} {i}
                    </div>
                    <div className="whatWeDo_description">{a.description}</div>
                    <Link to="articlePage">View Page</Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
