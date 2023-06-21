import { useState } from "react";
import { HypeSQGLogo, HypeSQLogo, HypeSQPLogo } from "../../../../Assets/svg";
import { bannerLinks } from "../data";
import "../styles/website.css";
import { motion } from "framer-motion";

const Website = ({ setData }: any) => {
  const [hoverColor, setHoverColor] = useState(3);

  return (
    <div className="portfolio-wrapper">
      <div className="web-banner">
        <div className="banner-right">
          <motion.h1
            className="heading-1-portfolio"
            style={{ color: "white" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="portfolio-heading-flex">
              <div>Dynami</div>
              <HypeSQGLogo className="q-class-portfolio" />
            </div>
          </motion.h1>
          <motion.h1
            className="heading-2-portfolio"
            style={{ color: "white" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            as always!
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
                onMouseLeave={() => setHoverColor(3)}
                key={k}
                style={{
                  color: `${k === hoverColor ? `${i.linkColor}` : "white"}`,
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
export default Website;
