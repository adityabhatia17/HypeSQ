import { motion } from "framer-motion";
import { useState } from "react";
import Photography from "./Components/Photography";
import SocialMedia from "./Components/SocialMedia";
import "./styles/portfolio.css";
import Website from "./Components/Website";
import Ads from "./Components/Ads";

const Portfolio = () => {
  const [data, setData] = useState("shoots");
  return (
    <>
      {/* <AnimatePresence> */}
      {data === "shoots" && (
        <motion.div
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          exit={{ opacity: 0.2 }}
        >
          <Photography setData={setData} />
        </motion.div>
      )}
      {/* </AnimatePresence>
      <AnimatePresence> */}
      {data === "socialmedia" && (
        <motion.div
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0.2 }}
        >
          <SocialMedia setData={setData} />
        </motion.div>
      )}
      {/* </AnimatePresence> */}
      {data === "website" && (
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Website setData={setData} />
        </motion.div>
      )}
      {data === "ads" && (
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Ads setData={setData} />
        </motion.div>
      )}
    </>
  );
};
export default Portfolio;
