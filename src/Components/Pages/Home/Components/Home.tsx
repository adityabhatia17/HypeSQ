import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HiArrowUpRight } from "react-icons/hi2";
import picBg from "../../../../Assets/png/picBg.png";
import { HypeSQLogo } from "../../../../Assets/svg";
import "../styles.css";
import homeElement from "../../../../Assets/png/homeElement.png";

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
              <div style={{ marginTop: "-15px", marginRight: "-5px" }}>a</div>
              <div>
                <HypeSQLogo className="q-class-home" />
              </div>
              <div style={{ marginTop: "-15px" }}>tive</div>
            </div>
          </motion.h1>
          <motion.p
            className="para"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontSize: "1.4rem", marginTop: "-4rem" }}
          >
            One Stop Solution For All Your
            <span className="span-text"> Digital</span> Needs
          </motion.p>

          <motion.div
            className="home-links-flex"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
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
              initial={{ x: 0 }}
              animate={{ x: 10 }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
                repeatDelay: 5,
                delay: 4,
                repeatType: "reverse",
              }}
            >
              <a
                href="https://www.youtube.com/watch?v=B-Hq9zeAWN0"
                style={{ textDecoration: "none" }}
                target="_blank"
              >
                <motion.span
                  className="arrow-animation"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 45 }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                    repeatDelay: 5,
                    delay: 4,
                  }}
                  // initial={{ rotate: isRightArrow ? -45 : 45 }}
                  // animate={{ rotate: isRightArrow ? 0 : 90 }}
                  // transition={{ duration: 0.5 }}
                >
                  <HiArrowUpRight className="diagonal-arrow" />
                </motion.span>
                Watch Agency Reel
              </a>
            </motion.div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: 10 }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
                repeatDelay: 5,
                delay: 6,
              }}
            >
              <a href="/portfolio" style={{ textDecoration: "none" }}>
                <motion.span
                  className="arrow-animation"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 45 }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "linear",
                    repeatDelay: 5,
                    delay: 6,
                  }}
                >
                  <HiArrowUpRight className="diagonal-arrow" />
                </motion.span>
                Latest Work For Our Brands
              </a>
            </motion.div>
          </motion.div>
        </div>
        <div className="landing-right">
          <motion.img
            src={homeElement}
            className="homeImg"
            initial={{ y: -10 }}
            animate={{ y: 10 }}
            transition={{
              type: "smooth",
              repeatType: "mirror",
              duration: 2,
              repeat: Infinity,
            }}
            // style={{ marginLeft: "150px" }}
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
