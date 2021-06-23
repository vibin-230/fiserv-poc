import React from "react";
import "./Donate.css";
import { Link } from "react-router-dom";
import { ReactComponent as AffiliatesIcon } from "../../assets/affiliates.svg";
export const Donate = () => {
  const affiliates = [
    {
      link: "american_heart_association",
      name: "American heart association",
    },
    {
      link: "transparent_hand",
      name: "Transparent Hand",
    },
    {
      link: "care_international",
      name: "CARE international",
    },
    {
      link: "apopo",
      name: "Apopo",
    },
    {
      link: "irc",
      name: "IRC",
    },
    {
      link: "ashoka",
      name: "Ashoka",
    },
  ];
  return (
    <div className="donate_wrapper">
      <div className="donate_title">Who we work with..</div>
      <div className="donate_content">
        {affiliates.map((a) => {
          return (
            <Link to={`${a.link}`}>
              <span>
                <AffiliatesIcon height={100} />
              </span>
              <div>{a.name}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
