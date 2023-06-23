import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineArrowRight, AiOutlinePlus } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { HypeSQBLogo } from "../../../../Assets/svg";
import { howWeMarketList } from "../data";
import "../styles.css";
import "./styles/howWeMarqet.css";

const HowWeMarqet = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showBar, setShowBar] = useState<number | null>(null);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleMouseEnter = (index: number) => {
    if (window.innerWidth >= 900) {
      setHoveredIndex(index);
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const handlePhoneClick = (index: number) => {
    if (window.innerWidth <= 900) {
      setShowBar(index);
      setHoveredIndex(null);
    }
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
                  width: "94.8vw",
                  // height: "20vw",
                }}
                initial={{ height: 0 }}
                animate={{
                  height: window.innerHeight,
                }}
                transition={{ duration: 0.3 }}
                key={k}
                className="market-list-open"
              >
                <div className="market-list-open-div">
                  <div style={{ marginRight: "4px" }}>
                    <RxCross2
                      style={{ color: "white", cursor: "pointer" }}
                      onClick={() => {
                        setShowBar(null);
                        setIsClicked(false);
                      }}
                    />
                  </div>
                  <p style={{ color: "white" }}>{i.itemName}</p>
                </div>

                <motion.div
                  transition={{ duration: 0.3 }}
                  initial={{ x: 0 }}
                  animate={{ x: 2 }}
                >
                  Hello
                </motion.div>
              </motion.div>
            ) : (
              <div
                className="market-list-item"
                // initial={{ opacity: 0, y: 50 }}
                // animate={{ opacity: 1, y: 0 }}
                // transition={{ duration: 0.5 }}
                onMouseEnter={() => handleMouseEnter(k)}
                onMouseLeave={handleMouseLeave}
              >
                <div>
                  {hoveredIndex === k ? (
                    <>
                      <div
                      // style={{ marginRight: "4px", marginLeft: "30px" }}
                      // initial={{ x: 0 }}
                      // animate={{ x: 4 }}
                      // transition={{ duration: 0.3 }}
                      >
                        <AiOutlinePlus
                          style={{ color: `${i.color}`, cursor: "pointer" }}
                          onClick={() => {
                            setShowBar(k);
                            handleClick();
                          }}
                        />
                      </div>
                      <p style={{ color: `${i.color}` }}>{i.itemName}</p>
                    </>
                  ) : (
                    <motion.div initial={{}}>
                      <AiOutlineArrowRight
                        onClick={() => handlePhoneClick(k)}
                      />
                      <p>{i.itemName}</p>
                    </motion.div>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <div
        className="landing-right-market"
        style={{
          opacity: isClicked ? 0 : 1,
          right:
            window.innerWidth >= 1024 && window.innerWidth <= 1199
              ? "0%"
              : "8%",
        }}
      >
        <span className="hypeItUp">#hypeitup</span>
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
          <div className="heading-2-market">
            <div>mar</div>
            <HypeSQBLogo className="q-class-market" />
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
