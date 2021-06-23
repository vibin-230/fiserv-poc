import React from "react";
import "./Popup.css";
export const Popup = (props: any) => {
  return (
    <div className="popup_wrapper">
      <div className="popup_body">
        <div onClick={props.close} className="popup_close">
          X
        </div>
        {props.children}
      </div>
    </div>
  );
};
