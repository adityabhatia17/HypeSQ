import { motion } from "framer-motion";
import { HypeSQLogo } from "../../../Assets/svg";
import "./styles.css";
import { LinearProgress } from "@mui/material";
import { useEffect, useState } from "react";

const Comingsoon = () => {
  const [color, setColor] = useState("#FF0042");

  useEffect(() => {
    const colors = ["#FF0042", "#1DA1F2", "#FF6D1A", "#6BDFA1"];
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % colors.length;
      setColor(colors[currentIndex]);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="landing-wrapper">
      <motion.h1
        className="heading-1"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span style={{ color: "#FF0042" }}>NEW PHASE</span> COMING SOON
      </motion.h1>
      <div style={{ width: "100%", marginTop: "30px" }}>
        <LinearProgress style={{ color: color }} />
      </div>
    </div>
  );
};
export default Comingsoon;
