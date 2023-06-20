import { motion } from "framer-motion";
import { useState } from "react";
import Photography from "./Components/Photography";
import SocialMedia from "./Components/SocialMedia";
import "./styles/portfolio.css";

const Portfolio = () => {
  const [data, setData] = useState("shoots");
  return (
    <>
      {data === "shoots" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Photography setData={setData} />
        </motion.div>
      )}
      {data === "socialmedia" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <SocialMedia setData={setData} />
        </motion.div>
      )}
    </>
  );
};
export default Portfolio;
