import { useState } from "react";
import { HypeSQLogo } from "../../../../Assets/svg";
import { bannerLinks } from "../data";

const Photography = ({ setData }: any) => {
  const [hoverColor, setHoverColor] = useState(0);
  const handleHover = () => {};

  return (
    <div className="portfolio-wrapper">
      <div className="banner">
        {/* <div className="banner-left"></div> */}
        <div className="banner-right">
          <h1 className="heading-1-portfolio" style={{ color: "white" }}>
            <div className="portfolio-heading-flex">
              <div>Photographi</div>
              <HypeSQLogo className="q-class-portfolio" />
            </div>
          </h1>
          <h1 className="heading-2-portfolio" style={{ color: "white" }}>
            Portfolio
          </h1>
          <div className="banner-links">
            {bannerLinks.map((i, k) => (
              <div
                onClick={() => setData(i.pageName)}
                onMouseEnter={() => setHoverColor(k)}
                onMouseLeave={() => setHoverColor(0)}
                key={k}
                style={{
                  color: `${k === hoverColor ? `${i.linkColor}` : "white"}`,
                }}
              >
                {i.linkName}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photography;
