import { HypeSQLogo } from "../../../../Assets/svg";
import "../styles/socialMedia.css";

const SocialMedia = ({ setData }: any) => {
  return (
    <div className="portfolio-wrapper">
      <div className="social-banner">
        {/* <div className="banner-left"></div> */}
        <div className="banner-right">
          <h1 className="heading-1-portfolio" style={{ color: "white" }}>
            <div className="portfolio-heading-flex">
              <div>Socially</div>
              <div style={{ marginTop: "-15px", marginRight: "-5px" }}>a</div>
              <div>
                <HypeSQLogo className="q-class-portfolio" />
              </div>
              <div style={{ marginTop: "-15px" }}>tive</div>
            </div>
          </h1>
          <h1 className="heading-2-portfolio" style={{ color: "white" }}>
            Portfolio
          </h1>
          <div>
            <div onClick={() => setData("shoots")}>Shoots</div>
            <div onClick={() => setData("socialmedia")}>Social Media</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SocialMedia;
