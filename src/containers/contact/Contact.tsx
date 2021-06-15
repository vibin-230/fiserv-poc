import React from "react";
import "./Contact.css";
import { ReactComponent as MobileIcon } from "../../assets/MobileIcon.svg";
import { ReactComponent as MailIcon } from "../../assets/MailIcon.svg";
import { ReactComponent as LocationIcon } from "../../assets/LocationIcon.svg";
import { ReactComponent as FacebookIcon } from "../../assets/FacebookIcon.svg";

import { ReactComponent as TwitterIcon } from "../../assets/TwitterIcon.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/LinkedinIcon.svg";

export const Contact = () => {
  return (
    <div className="section_wrapper">
      <div className="contact_wrapper">
        <div>
          <div className="contact_title">Charity</div>
          <span className="contact_content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit
            pellentesque habitant morbi tristique senectus et. Est sit amet
            facilisis magna. Enim eu turpis egestas pretium aenean pharetra
            magna ac placerat.
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
      </div>
    </div>
  );
};
