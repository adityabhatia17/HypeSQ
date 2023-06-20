import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import EnquiryForm from "./EnquiryForm";

const transporter = nodemailer.createTransport({
  host: "gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "adityabhatia1704@gmail.com",
    pass: "iqkepjekdtdtnvqz",
  },
});

const emailHtml = render(<EnquiryForm />);

const options = {
  from: "adityabhatia1704@gmail.com",
  to: "user@gmail.com",
  subject: "hello world",
  html: emailHtml,
};

transporter.sendMail(options);
