import React from "react";
import { Link } from "react-router-dom";

export const Care_international = (props: any) => {
  return (
    <div className="page_wrapper">
      <h1>Welcome to Care International</h1>
      <button
        onClick={() => {
          props.setDonatePopup({ open: true, text: "Care International" });
        }}
      >
        Donate
      </button>
      <Link to="/#donate">Go To Home</Link>
    </div>
  );
};
