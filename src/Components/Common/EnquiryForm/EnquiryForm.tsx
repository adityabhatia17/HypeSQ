import { Form, Input, Select } from "antd";
import { useState } from "react";
import "./styles.css";

const { Option } = Select;

const EnquiryForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

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
        <Form>
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: "Please input your name!" }]}
            style={{ color: "white" }}
          >
            <Input style={{ color: "white" }} placeholder="Hello" />
          </Form.Item>
          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
            style={{ color: "white" }}
          >
            <Input
              addonBefore={prefixSelector}
              style={{ color: "white" }}
              placeholder="Phone Number"
            />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please input your valid email!" },
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
            ]}
            style={{ color: "white" }}
          >
            <Input style={{ color: "white" }} placeholder="Hello" />
          </Form.Item>
          {/* Dropdown: Marketing, Collaboration, Career */}
        </Form>
      </div>
    </div>
  );
};

export default EnquiryForm;
