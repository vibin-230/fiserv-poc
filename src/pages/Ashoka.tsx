import React from "react";
import { Link } from "react-router-dom";

export const Ashoka = (props: any) => {
  return (
    <div className="page_wrapper">
      <h1>Welcome to Ashoka</h1>
      <button
        onClick={() => {
          props.setDonatePopup({ open: true, text: "Ashoka" });
        }}
      >
        Donate
      </button>
      <Link to="/#donate">Go To Home</Link>
    </div>
  );
};
