import { motion } from "framer-motion";
import { HypeSQGLogo } from "../../../Assets/svg";
import "./aboutUs.css";
import ajlaPic from "../../../Assets/png/AJLA.png";

const AboutUs = () => {
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
            The most
          </motion.h1>
          <motion.h1
            className="heading-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="heading-2-flex">
              <div style={{ marginTop: "-15px", marginRight: "-5px" }}>uni</div>
              <div>
                <HypeSQGLogo className="q-class-home" />
              </div>
              <div style={{ marginTop: "-15px" }}>ue</div>
            </div>
            <div style={{ marginTop: "-95px" }}>team</div>
          </motion.h1>
          <motion.div className="para-about-us">
            We've got a bunch of diverse backgrounds and crazy skills that set
            us apart. Each one of us brings something special to the table, and
            when we come together, it's magic. We embrace our quirks and
            individuality, and that's what makes us so darn awesome. We're not
            afraid to think outside the box and push the boundaries. We're a
            team that stands out from the crowd, inspiring others to embrace
            their own uniqueness.
          </motion.div>
        </div>
        <div className="landing-right">
          <motion.img
            src={ajlaPic}
            className="homeImg"
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
      <div className="founders-wrapper">
        
      </div>
    </div>
  );
};
export default AboutUs;
