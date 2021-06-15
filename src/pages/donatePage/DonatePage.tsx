import React from "react";
import { Link } from "react-router-dom";
import { DonateUsForm } from "../../components/donateUsForm/DonateUsForm";
import "./DonatePage.css";
export const DonatePage = () => {
  return (
    <div className="donatePage_wrapper">
      <div>
        <Link to="/" className="donatePage_back_button">
          Back
        </Link>
      </div>
      <DonateUsForm />
    </div>
  );
};
