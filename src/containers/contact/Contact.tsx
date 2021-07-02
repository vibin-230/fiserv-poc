import React from "react";
import "./Contact.css";
import { ReactComponent as MobileIcon } from "../../assets/MobileIcon.svg";
import { ReactComponent as MailIcon } from "../../assets/MailIcon.svg";
import { ReactComponent as LocationIcon } from "../../assets/LocationIcon.svg";
import { ReactComponent as FacebookIcon } from "../../assets/FacebookIcon.svg";

import { ReactComponent as TwitterIcon } from "../../assets/TwitterIcon.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/LinkedinIcon.svg";
import ContactImg from "../../assets/contactImg.webp";

export const Contact = () => {
  return (
    <div className="contact_section_wrapper">
      <div className="contact_top">
        <img src={ContactImg} />
        <div className="contact_top_text">
          <div className="contact_top_title">For better world</div>
          <div>
            With over $9 billion raised so far for causes large and small,
            GoFundMe is one of the most well-known and trusted personal
            fundraising websites in the crowdfunding arena. Through their
            platform, people can raise money for personal, business, and
            charitable causes.
          </div>
        </div>
      </div>
      <footer className="footer_wrapper">
        <div>
          <div className="contact_title">Charity</div>
          <span className="contact_content">
            GlobalGiving connects nonprofits, donors, and companies in nearly
            every country in the world. We help fellow nonprofits access the
            funding, tools, training, and support they need to serve their
            communities.
          </span>
          <span>
            <span className="contact_icon">
              <FacebookIcon height={15} />
            </span>
            <span className="contact_icon">
              <TwitterIcon height={15} />
            </span>
            <span className="contact_icon">
              <LinkedinIcon height={15} />
            </span>
          </span>
        </div>
        <div>
          <div className="contact_title">Contact</div>
          <span>
            <span className="contact_icon">
              <MobileIcon height={15} />
            </span>
            <span className="contact_content">9023534378</span>
          </span>
          <span>
            <span className="contact_icon">
              <MailIcon height={15} />
            </span>
            <span className="contact_content">support@charity.com</span>
          </span>
          <span>
            <span className="contact_icon">
              <LocationIcon height={15} />
            </span>
            <span className="contact_content">
              No. 43/302, A2 block, Chennai - 6000032
            </span>
          </span>
        </div>
      </footer>
    </div>
  );
};
