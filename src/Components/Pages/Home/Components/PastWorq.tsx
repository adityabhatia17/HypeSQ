import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import { HypeSQLogo } from "../../../../Assets/svg";
import { ourPastWorqData } from "../data";
import "../styles.css";
import "./styles/pastwork.css";
import sachinPic from "../../../../Assets/gif/sachinClient.gif";
import smsHEG from "../../../../Assets/gif/smsHEG.gif";
import smsHEG2 from "../../../../Assets/gif/smsHEG3rd.gif";

const PastWorq = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number>(0);

  const handleMouseEnter = (idx: number) => {
    setHoveredIdx(idx);
  };

  const handleMouseLeave = () => {
    setHoveredIdx(0);
  };
  return (
    <div className="landing-wrapper-worq">
      <div
        className="landing-left-worq"
        style={{
          backgroundColor: `${
            hoveredIdx === -1 ? "white" : ourPastWorqData[hoveredIdx]?.bgColor
          }`,
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
          className="heading-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="heading-2-flex">
            <div style={{ marginTop: "-15px", marginRight: "-5px" }}>Work</div>
            <div>
              <HypeSQLogo className="q-class-home" />
            </div>
          </div>
        </motion.h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginTop: "-60px",
          }}
        >
          {ourPastWorqData.map((i, k) => (
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                // color: `${bgColor !== "" && "white"}`,
              }}
              onMouseEnter={() => handleMouseEnter(k)}
              onMouseLeave={handleMouseLeave}
            >
              <div style={{ marginRight: "10px", cursor: "pointer" }}>
                {hoveredIdx == k ? (
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
                  width: "700px",
                }}
              >
                <p
                  style={{
                    fontSize: "1.5rem",
                  }}
                >
                  {i.headingText}
                </p>
                <p
                  style={{
                    fontSize: "1.2rem",
                  }}
                >
                  {i.descriptionText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="landing-right-worq">
        <img
          src={
            hoveredIdx === 0 ? smsHEG : hoveredIdx === 1 ? sachinPic : smsHEG2
          }
          alt={hoveredIdx === 0 ? "SMS-HEG" : "Sachin"}
        />
      </div>
    </div>
  );
};

export default PastWorq;
