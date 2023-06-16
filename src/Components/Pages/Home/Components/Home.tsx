import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import picBg from "../../../../Assets/png/picBg.png";
import { HypeSQLogo } from "../../../../Assets/svg";
import "../styles.css";
import { useState } from "react";
import Footer from "./Footer";
import HowWeMarqet from "./HowWeMarqet";
import PastWorq from "./PastWorq";
import SpectacularClients from "./SpectacularClients";

function Section({ children }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

const Home: React.FC = () => {
  const [isRightArrow, setIsRightArrow] = useState(false);
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
            <div className="heading-2-flex">
              <div style={{ marginTop: "-8px" }}>a</div>
              <div>
                <HypeSQLogo className="q-class-home" />
              </div>
              <div style={{ marginTop: "-8px" }}>tive</div>
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
            className="line-flex"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="red-line"></div>
            <div className="red-line"></div>
          </motion.div>
          <motion.div
            className="home-links-flex"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: 10 }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear",
                repeatDelay: 2,
                delay: 4,
              }}
            >
              <a href="/portfolio" style={{ textDecoration: "none" }}>
                <motion.div
                  className="arrow-animation"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 45 }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                    repeatDelay: 2,
                    delay: 4,
                  }}
                  // initial={{ rotate: isRightArrow ? -45 : 45 }}
                  // animate={{ rotate: isRightArrow ? 0 : 90 }}
                  // transition={{ duration: 0.5 }}
                >
                  <HiArrowUpRight style={{ fontSize: "30px" }} />
                </motion.div>
                Watch Agency Reel
              </a>
            </motion.div>
            <a href="/portfolio" style={{ textDecoration: "none" }}>
              <HiArrowUpRight style={{ fontSize: "30px" }} />
              Latest Work For Our Brands
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
      {/* <Section>
        <HowWeMarqet />
      </Section> */}
      {/* <Section>
        <PastWorq />
      </Section> */}
      {/* <Section>
        <SpectacularClients />
      </Section>
      <Footer /> */}
    </div>
  );
};
export default Home;
