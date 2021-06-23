import React from "react";
import { Link } from "react-router-dom";

export const American_heart_association = (props: any) => {
  return (
    <div className="page_wrapper">
      <h1>Welcome to American Heart Association</h1>
      <button
        onClick={() => {
          props.setDonatePopup({
            open: true,
            text: "American Heart Association",
          });
        }}
      >
        Donate
      </button>
      <Link to="/#donate">Go To Home</Link>
    </div>
  );
};
