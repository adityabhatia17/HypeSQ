import { motion } from "framer-motion";
import picBg from "../../../Assets/png/picBg.png";
import { HypeSQBLogo, HypeSQLogo } from "../../../Assets/svg";
import "./styles.css";
import { HiArrowUpRight } from "react-icons/hi2";
import { howWeMarketList } from "./data";
import { AiOutlineArrowRight, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import PastWorq from "./PastWorq";

const Home = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showBar, setShowBar] = useState<number | null>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div>
      <div className="landing-wrapper">
        <div className="landing-left">
          <motion.h1
            className="heading-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Be socially
          </motion.h1>
          <motion.h1
            className="heading-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <div>a</div>
              <div style={{ marginTop: "28px" }}>
                <HypeSQLogo width={132} />
              </div>
              <div>tive</div>
            </div>
          </motion.h1>
          <motion.p
            className="para"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontSize: "1.4rem" }}
          >
            One Stop Solution For All Your
            <span className="span-text"> Digital</span> Needs
          </motion.p>
          <motion.div
            className="btn-flex"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: "30%",
                  backgroundColor: "#FF0042",
                  height: "2px",
                }}
              ></div>
              <div
                style={{
                  width: "30%",
                  backgroundColor: "#FF0042",
                  height: "2px",
                }}
              ></div>
            </div>
          </motion.div>
          <motion.div
            className="home-links-flex"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a href="/portfolio">
              <HiArrowUpRight />
              Watch Agency Reel
            </a>
            <a href="/portfolio">
              <HiArrowUpRight />
              Latest Work
            </a>
          </motion.div>
        </div>
        <div className="landing-right">
          <motion.img
            src={picBg}
            className="iphone"
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>
      </div>
      <div className="landing-wrapper">
        <div
          className="landing-left"
          style={{ position: "absolute", zIndex: 80 }}
        >
          <div className="how-we-market-list">
            {howWeMarketList.map((i, k) =>
              showBar === k ? (
                <motion.div
                  initial={{ opacity: 0, x: 0 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    width: "100vw",
                    backgroundColor: `${i.color}`,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <motion.div
                      style={{ marginRight: "10px", marginLeft: "30px" }}
                      initial={{ x: 0 }}
                      animate={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FiArrowUpRight
                        style={{ color: "white", cursor: "pointer" }}
                        onClick={() => setShowBar(null)}
                      />
                    </motion.div>
                    <p style={{ color: "white" }}>{i.itemName}</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  className="market-list-item"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => handleMouseEnter(k)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div>
                    {hoveredIndex === k ? (
                      <>
                        <motion.div
                          style={{ marginRight: "10px", marginLeft: "30px" }}
                          initial={{ x: 0 }}
                          animate={{ x: 10 }}
                          transition={{ duration: 0.3 }}
                        >
                          <AiOutlinePlus
                            style={{ color: `${i.color}`, cursor: "pointer" }}
                            onClick={() => {
                              setShowBar(k);
                              handleClick();
                            }}
                          />
                        </motion.div>
                        <p style={{ color: `${i.color}` }}>{i.itemName}</p>
                      </>
                    ) : (
                      <>
                        <AiOutlineArrowRight />
                        <p>{i.itemName}</p>
                      </>
                    )}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </div>
        <div
          className="landing-right"
          style={{
            position: "absolute",
            right: "8%",
            opacity: showBar == null ? 1 : 0,
          }}
        >
          <motion.p style={{ color: "#1DA1F2", fontSize: "1.5rem" }}>
            #hypeitup
          </motion.p>
          <motion.h1
            className="heading-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            How we
          </motion.h1>
          <motion.h1
            className="heading-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <div>mar</div>
              <div style={{ marginTop: "28px" }}>
                <HypeSQBLogo width={132} />
              </div>
              <div>et</div>
            </div>
          </motion.h1>
          <motion.div
            style={{
              width: "30rem",
              lineHeight: "1.15312464em",
              fontSize: "1.4rem",
            }}
          >
            From Creatively engaging content and shoots to chart-breaking ad
            campaigns, we have delivered value that is more than just numbers.
            We create a brand family. Click on the services below to know more!
          </motion.div>
        </div>
      </div>
      <PastWorq />
    </div>
  );
};
export default Home;
