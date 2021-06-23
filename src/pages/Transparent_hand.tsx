import React from "react";
import { Link } from "react-router-dom";

export const Transparent_hand = (props: any) => {
  return (
    <div className="page_wrapper">
      <h1>Welcome to Transparent Hand</h1>
      <button
        onClick={() => {
          props.setDonatePopup({ open: true, text: "Transparent Hand" });
        }}
      >
        Donate
      </button>

      <Link to="/#donate">Go To Home</Link>
    </div>
  );
};
