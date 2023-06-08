import { motion } from "framer-motion";
import { howWeMarketList } from "./data";
import { AiOutlineArrowRight, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { HypeSQBLogo, HypeSQLogo } from "../../../Assets/svg";
import "./styles.css";

const HowWeMarqet = () => {
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
    <div className="landing-wrapper-market">
      <div className="landing-left-market">
        <div className="how-we-market-list">
          {howWeMarketList.map((i, k) =>
            showBar === k ? (
              <motion.div
                style={{
                  backgroundColor: `${i.color}`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "10px",
                }}
                initial={{ x: 0, y: 0 }}
                animate={{ width: "100vw", height: "20vw" }}
                transition={{ duration: 0.3 }}
              >
                <div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <motion.div
                      style={{ marginRight: "4px" }}
                      initial={{ x: 0 }}
                      animate={{ x: 3 }}
                      transition={{ duration: 0.3 }}
                    >
                      <RxCross2
                        style={{ color: "white", cursor: "pointer" }}
                        onClick={() => {
                          setShowBar(null);
                          setIsClicked(false);
                        }}
                      />
                    </motion.div>
                    <motion.p
                      initial={{ x: 0 }}
                      animate={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                      style={{ color: "white" }}
                    >
                      {i.itemName}
                    </motion.p>
                  </div>
                </div>
                <motion.div
                  transition={{ duration: 0.3 }}
                  initial={{ x: 0 }}
                  animate={{ x: 25 }}
                >
                  Hello
                </motion.div>
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
                        style={{ marginRight: "4px", marginLeft: "30px" }}
                        initial={{ x: 0 }}
                        animate={{ x: 4 }}
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
        className="landing-right-market"
        style={{
          opacity: isClicked ? 0 : 1,
          right: "8%",
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
            <div style={{ marginTop: "20px" }}>
              <HypeSQBLogo className="q-class" />
            </div>
            <div>et</div>
          </div>
        </motion.h1>
        <motion.div className="para-market">
          From Creatively engaging content and shoots to chart-breaking ad
          campaigns, we have delivered value that is more than just numbers. We
          create a brand family. Click on the services below to know more!
        </motion.div>
      </div>
    </div>
  );
};
export default HowWeMarqet;
