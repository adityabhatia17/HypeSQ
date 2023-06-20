import { useEffect, useState } from "react";
import {
  HypesquareMediaLogo,
  HypesquareMediaWhiteLogo,
} from "../../Assets/svg";
import Button from "../Common/Button/Button";
import MobileLayout from "./MobileLayout";
import "./styles.css";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const isPortfolio = window.location.pathname.split("/")[1] === "portfolio";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        !isPortfolio
          ? "header"
          : `${isScrolled ? "portfolio-header scrolled" : "portfolio-header"}`
      }`}
    >
      <a href="/">
        {!isPortfolio ? (
          <HypesquareMediaLogo width={150} />
        ) : isScrolled ? (
          <HypesquareMediaLogo width={150} />
        ) : (
          <HypesquareMediaWhiteLogo width={150} />
        )}
      </a>
      <div className="links-flex">
        <a href="/">
          <p
            className={`${
              !isPortfolio
                ? "link"
                : `link ${isScrolled ? "black-clr" : "white-clr"}`
            }`}
          >
            HOME
          </p>
        </a>
        <a href="/portfolio">
          <p
            className={`${
              !isPortfolio
                ? "link"
                : `link ${isScrolled ? "black-clr" : "white-clr"}`
            }`}
          >
            PORTFOLIO
          </p>
        </a>
        <a href="/about-us">
          <p
            className={`${
              !isPortfolio
                ? "link"
                : `link ${isScrolled ? "black-clr" : "white-clr"}`
            }`}
          >
            ABOUT US
          </p>
        </a>
        <a href="/contact-us">
          <p
            className={`${
              !isPortfolio
                ? "link"
                : `link ${isScrolled ? "black-clr" : "white-clr"}`
            }`}
          >
            CONTACT US
          </p>
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
