import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import "./styles.css";

export default function MobileLayout() {
  const [flag, setFlag] = useState(false);

  return (
    <div className="drawer-wrapper">
      <MenuRoundedIcon className="link" onClick={() => setFlag(true)} />
      <Drawer anchor={"right"} open={flag} onClose={() => setFlag(false)}>
        <div className="mobile-drawer">
          <a href="/">
            <p className="link">Home</p>
          </a>
          <a href="/portfolio">
            <p className="link">Portfolio</p>
          </a>
          <a href="/about-us">
            <p className="link">About Us</p>
          </a>
          <a href="/contact-us">
            <p className="link">Contact Us</p>
          </a>
        </div>
      </Drawer>
    </div>
  );
}
