import { Form, Input } from "antd";
import { useState } from "react";
import "./styles.css";
import { CountryPhoneCodes } from "./data";
import Select from "react-select";
import axios from "axios";

const EnquiryForm = () => {
  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: "none",
      padding: "0px",
      fontSize: "8px",
      width: "6.5rem",
      border: "none",
      borderBottom: "2px solid white",
      borderRadius: "none",
      marginBottom: "22px",
      outline: state.isFocused ? "none" : provided.outline,
    }),
    option: (provided: any) => ({
      ...provided,
      fontSize: "12px",
    }),
    menu: (provided: any) => ({
      ...provided,
      marginTop: "-15px", // Adjust the negative margin to decrease the space
    }),
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };
  const [selectedCountryCode, setSelectedCountryCode] = useState(null);

  const handleCountryCodeChange = (selectedOption: any) => {
    setSelectedCountryCode(selectedOption);
  };

  // const prefixSelector = (
  //   <Form.Item name="prefix" noStyle>
  //     <Select style={{ width: 70 }}>
  //       <Option value="86">+86</Option>
  //       <Option value="87">+87</Option>
  //     </Select>
  //   </Form.Item>
  // );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+1");

  const handleNameChange = (e: any) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e: any) => {
    setPhone(e.target.value);
  };

  // const handleCountryCodeChange = (e: any) => {
  //   setCountryCode(e.target.value);
  // };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Perform form submission logic here
    console.log("Submitted:", name, email, phone, countryCode);
    const formData = new FormData(e.target);
    const emailData = {
      from: email,
      to: "hypesquaremedia@gmail.com",
      subject: "Form Submission",
      text: `Name: ${formData.get("name")}\nEmail: ${formData.get(
        "email"
      )}\nMessage: ${formData.get("message")}`,
    };

    axios
      .post(`https://api.mailgun.net/v3/YOUR_DOMAIN_NAME/messages`, emailData, {
        auth: {
          username: "api",
          password: "YOUR_API_KEY",
        },
      })
      .then((response) => {
        console.log("Email sent successfully!", response);
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
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
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="white-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
              className="white-input"
            />
          </div>
          <div>
            <label htmlFor="email" className="white-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
              className="white-input"
            />
          </div>
          <div>
            <label htmlFor="phone" className="white-label">
              Phone
            </label>
            <div
              style={{ display: "flex", alignItems: "baseline", gap: "0px" }}
            >
              {/* <select value={countryCode} onChange={handleCountryCodeChange}>
                {CountryPhoneCodes.map((i) => (
                  <option key={i.code} value={i.code}>
                    {`${i.country} (${i.code})`}
                  </option>
                ))}
              </select> */}
              <Select
                options={CountryPhoneCodes.map((i) => {
                  return {
                    value: i.code,
                    label: i.country,
                  };
                })}
                value={selectedCountryCode}
                onChange={(e) => handleCountryCodeChange(e)}
                isSearchable
                // placeholder="Search Country Code..."
                // className="country-code-select"
                styles={customStyles}
              />
              <input
                type="number"
                id="phone"
                value={phone}
                onChange={handlePhoneChange}
                required
                className="white-input-phone"
              />
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EnquiryForm;
