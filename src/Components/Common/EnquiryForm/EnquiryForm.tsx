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
        <form>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
