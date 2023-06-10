import {
  HypeSQBLogo,
  HypeSQGLogo,
  HypeSQGreen,
  HypeSQLogo,
} from "../../../Assets/svg";

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
      </div>
      <div className="landing-footer-right">
        <HypeSQGreen />
      </div>
    </div>
  );
};
export default Footer;
