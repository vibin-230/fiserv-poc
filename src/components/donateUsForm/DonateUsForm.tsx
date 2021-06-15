import React from "react";
import "./DonateUsForm.css";
export const DonateUsForm = () => {
  return (
    <div className="form_wrapper">
      <span className="form_title">Thank you for the initiative</span>
      <form>
        <span>
          <label>First name:</label>
          <input type="text" id="fname" name="fname" />
        </span>
        <span>
          <label>Last name:</label>
          <input type="text" id="lname" name="lname" />
        </span>
        <span>
          <label>Mobile:</label>
          <input type="tel" id="mobile" name="mobile" />
        </span>
        <span>
          <label>Email:</label>
          <input type="email" id="email" name="email" />
        </span>
        <span>
          <label>Amount:</label>
          <input type="number" id="amount" name="amount" />
        </span>
        <span>
          <label>Description:</label>
          <textarea id="description" name="description" />
        </span>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
