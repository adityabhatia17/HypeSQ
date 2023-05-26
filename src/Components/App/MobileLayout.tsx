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
          <a href="/compare">
            <p className="link">Compare</p>
          </a>
          <a href="/watchlist">
            <p className="link">Watchlist</p>
          </a>
          <a href="/dashboard">
            <p className="link">Dashboard</p>
          </a>
        </div>
      </Drawer>
    </div>
  );
}
