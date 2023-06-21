import { useState } from "react";
import { HypeSQLogo, HypeSQPLogo } from "../../../../Assets/svg";
import { bannerLinks } from "../data";
import "../styles/socialMedia.css";
import { motion } from "framer-motion";

const SocialMedia = ({ setData }: any) => {
  const [hoverColor, setHoverColor] = useState(1);

  return (
    <div className="portfolio-wrapper">
      <div className="social-banner">
        <div className="banner-right">
          <motion.h1
            className="heading-1-portfolio"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="portfolio-sm-heading-flex">
              <div style={{ color: "black" }}>Socially</div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "black",
                }}
              >
                <div>a</div>
                <HypeSQPLogo className="q-class-portfolio" />
                <div>tive</div>
              </div>
            </div>
          </motion.h1>
          <motion.h1
            className="heading-2-portfolio"
            style={{ color: "black" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            brands we made
          </motion.h1>
          <motion.div
            className="banner-links"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {bannerLinks.map((i, k) => (
              <div
                onClick={() => setData(i.pageName)}
                onMouseEnter={() => setHoverColor(k)}
                onMouseLeave={() => setHoverColor(1)}
                key={k}
                style={{
                  color: `${k === hoverColor ? `${i.linkColor}` : "black"}`,
                }}
              >
                {i.linkName}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default SocialMedia;
