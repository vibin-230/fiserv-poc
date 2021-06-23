import React from "react";
import { Link } from "react-router-dom";

export const Apopo = (props: any) => {
  return (
    <div className="page_wrapper">
      <h1>Welcome to Apopo</h1>
      <button
        onClick={() => {
          props.setDonatePopup({ open: true, text: "Apopo" });
        }}
      >
        Donate
      </button>
      <Link to="/#donate">Go To Home</Link>
    </div>
  );
};
