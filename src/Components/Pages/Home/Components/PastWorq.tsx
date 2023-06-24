import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import { HypeSQBlLogo, HypeSQLogo } from "../../../../Assets/svg";
import { ourPastWorqData } from "../data";
import "../styles.css";
import "./styles/pastwork.css";
import sachinPic from "../../../../Assets/gif/sachinClient.gif";
import smsHEG from "../../../../Assets/gif/smsHEG.gif";
import smsHEG2 from "../../../../Assets/gif/smsHEG3rd.gif";

const PastWorq = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);

  useEffect(() => {
    if (window.innerWidth <= 800) {
      const timer = setTimeout(() => {
        hoveredIdx === 0
          ? setHoveredIdx(1)
          : hoveredIdx === 1
          ? setHoveredIdx(2)
          : setHoveredIdx(0);
        // console.log(hoveredIdx);
        return () => clearTimeout(timer);
      }, 2000);
    }
  });

  const handleMouseEnter = (idx: number) => {
    setHoveredIdx(idx);
  };

  const handleMouseLeave = () => {
    setHoveredIdx(0);
  };

  return (
    <div className="landing-wrapper-worq">
      <motion.div
        className="landing-left-worq"
        style={{
          backgroundColor: `${
            hoveredIdx === -1 ? "white" : ourPastWorqData[hoveredIdx]?.bgColor
          }`,
        }}
        whileHover={{
          backgroundColor: `${
            hoveredIdx === -1 ? "white" : ourPastWorqData[hoveredIdx]?.bgColor
          }`,
          transition: { duration: 0.5 },
        }}
      >
        <motion.h1
          className="heading-1-worq"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Latest
        </motion.h1>
        <motion.h1
          className="heading-2-worq"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="heading-2-flex">
            <div style={{ marginTop: "-15px", marginRight: "-5px" }}>wor</div>
            <div>
              <HypeSQBlLogo className="q-class-pw" />
            </div>
          </div>
        </motion.h1>

        <div className="worq-list">
          {ourPastWorqData.map((i, k) => (
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "3px",
              }}
              onMouseEnter={() => handleMouseEnter(k)}
              onMouseLeave={handleMouseLeave}
              key={k}
            >
              <div style={{ marginRight: "10px", cursor: "pointer" }}>
                {hoveredIdx === k ? (
                  <FiArrowUpRight style={{ color: "white" }} />
                ) : (
                  <AiOutlineArrowRight />
                )}
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  color: `${hoveredIdx === k ? "white" : "black"}`,
                  width: "600px",
                  gap: "1px",
                }}
              >
                <p
                  style={{
                    fontSize: "1rem",
                  }}
                >
                  {i.headingText}
                </p>
                <p
                  style={{
                    fontSize: "1rem",
                  }}
                >
                  {i.descriptionText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="landing-right-worq">
        <div className="landing-right-worq-img">
          <img
            src={
              hoveredIdx === 0 ? smsHEG : hoveredIdx === 1 ? sachinPic : smsHEG2
            }
            alt={hoveredIdx === 0 ? "SMS-HEG" : "Sachin"}
            style={{ width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default PastWorq;
