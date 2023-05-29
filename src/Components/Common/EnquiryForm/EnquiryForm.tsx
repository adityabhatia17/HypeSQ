import React, { useState } from "react";
import "./styles.css";

const EnquiryForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`enquiry-form ${isOpen ? "open" : ""}`}>
      <button className="toggle-btn" onClick={toggleForm}>
        Enquiry
      </button>
      <div className="form-content">
        <p style={{ color: "white" }}>
          Fill in the details below and one of our executives will get back to
          you shortly. ⚡
        </p>
        <form className="enquiryForm">
          <input placeholder="name"></input>
          <input placeholder="Number"></input>
          <input placeholder="Email"></input>
          {/* Dropdown: Marketing, Collaboration, Career */}
          <input placeholder="Select Category"></input>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
