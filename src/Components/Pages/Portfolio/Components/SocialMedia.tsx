import { useState } from "react";
import { HypeSQLogo, HypeSQPLogo } from "../../../../Assets/svg";
import { bannerLinks } from "../data";
import "../styles/socialMedia.css";

const SocialMedia = ({ setData }: any) => {
  const [hoverColor, setHoverColor] = useState(1);
  return (
    // <div className="portfolio-wrapper">
    //   <div className="social-banner">
    //     {/* <div className="banner-left"></div> */}
    //     <div className="banner-right">
    //       <h1 className="heading-1-sm-portfolio" style={{ color: "white" }}>
    //         <div className="socialmedia-heading-flex">
    //           <div style={{ color: "black" }}>Socially</div>
    //           <div className="portfolio-sm-heading-flex">
    //             <div
    //               style={{
    //                 color: "black",
    //               }}
    //             >
    //               a
    //             </div>
    //             <HypeSQPLogo className="q-class-portfolio" />
    //             <div style={{ color: "black" }}>tive</div>
    //           </div>
    //         </div>
    //       </h1>
    //       <h1 className="heading-2-sm-portfolio" style={{ color: "black" }}>
    //         brands we made
    //       </h1>
    //       <div className="banner-links">
    //         {bannerLinks.map((i, k) => (
    //           <div
    //             onClick={() => setData(i.pageName)}
    //             onMouseEnter={() => setHoverColor(k)}
    //             onMouseLeave={() => setHoverColor(1)}
    //             key={k}
    //             style={{
    //               color: `${k === hoverColor ? `${i.linkColor}` : "black"}`,
    //             }}
    //           >
    //             {i.linkName}
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="portfolio-wrapper">
      <div className="social-banner">
        <div className="banner-right">
          <h1 className="heading-1-portfolio" style={{ color: "white" }}>
            <div className="portfolio-heading-flex">
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
          </h1>
          <h1 className="heading-2-portfolio" style={{ color: "black" }}>
            brands we made
          </h1>
          <div className="banner-links">
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default SocialMedia;
