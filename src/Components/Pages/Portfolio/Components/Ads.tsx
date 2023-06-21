import { useState } from "react";
import { HypeSQYLogo } from "../../../../Assets/svg";
import { bannerLinks } from "../data";
import "../styles/ads.css";
import { motion } from "framer-motion";

const Ads = ({ setData }: any) => {
  const [hoverColor, setHoverColor] = useState(2);

  return (
    <div className="portfolio-wrapper">
      <div className="ads-banner">
        <div className="banner-right">
          <motion.h1
            className="heading-1-portfolio"
            style={{ color: "white" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="ads-sm-heading-flex">
              <div>Specta</div>
              <HypeSQYLogo className="q-class-portfolio" />
              <div>ular</div>
            </div>
          </motion.h1>
          <motion.h1
            className="heading-2-portfolio"
            style={{ color: "white" }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            results
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
                onMouseLeave={() => setHoverColor(2)}
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
export default Ads;
