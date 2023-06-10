import { AiFillYoutube } from "react-icons/ai";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { HypeSQGLogo, HypeSQGreen } from "../../../Assets/svg";

const Footer = () => {
  return (
    <div className="landing-footer-wrapper">
      <div className="landing-footer-left">
        <h1 className="footer-heading">About Us</h1>
        <p className="para" style={{ paddingRight: "3rem" }}>
          We at HYPESQUARE are committed to providing an impeccable digital
          experience to our clients across the private, public, and social
          sectors to create a remarkable online presence.
        </p>
        <h1 className="big-text-footer">
          <span>Let's </span>
          <span style={{ display: "flex", alignItems: "center" }}>
            <HypeSQGLogo className="q-class-footer" />
            reate Something Awesome!
          </span>
        </h1>
        <div className="socials-footer">
          <h2 style={{ color: "#ff6d1a" }}>Socials</h2>
          <div className="socials">
            <div className="social-buttons facebook">
              <FaFacebookF className="icon" />
            </div>
            <div className="social-buttons twitter">
              <FaTwitter className="icon" />
            </div>
            <div className="social-buttons instagram">
              <FaInstagram className="icon" />
            </div>
            <div className="social-buttons youtube">
              <AiFillYoutube className="icon" />
            </div>
            <div className="social-buttons linkedin">
              <FaLinkedin className="icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="landing-footer-right">
        <HypeSQGreen />
      </div>
    </div>
  );
};
export default Footer;
