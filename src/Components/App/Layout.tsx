import { HypesquareMediaLogo } from "../../Assets/svg";
import Button from "../Common/Button/Button";
import MobileLayout from "./MobileLayout";
import "./styles.css";

function NavBar() {
  return (
    <div className="header">
      <a href="/">
        <HypesquareMediaLogo width={150} />
      </a>
      <div className="links-flex">
        <a href="/">
          <p className="link">HOME</p>
        </a>
        <a href="/portfolio">
          <p className="link">PORTFOLIO</p>
        </a>
        <a href="/about-us">
          <p className="link">ABOUT US</p>
        </a>
        <a href="/contact-us">
          <p className="link">CONTACT US</p>
        </a>
        <a href="/">
          <Button
            text="Enquire Now"
            onClick={() => {
              console.log("btn-clicked!!!");
            }}
          />
        </a>
      </div>
      <MobileLayout />
    </div>
  );
}

export default NavBar;
