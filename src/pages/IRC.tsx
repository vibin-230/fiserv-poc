import React from "react";
import { Link } from "react-router-dom";

export const IRC = (props: any) => {
  return (
    <div className="page_wrapper">
      <h1>Welcome to IRC</h1>
      <button
        onClick={() => {
          props.setDonatePopup({ open: true, text: "IRC" });
        }}
      >
        Donate
      </button>
      <Link to="/#donate">Go To Home</Link>
    </div>
  );
};
