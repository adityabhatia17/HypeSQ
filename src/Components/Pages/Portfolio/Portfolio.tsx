import { HypeSQLogo } from "../../../Assets/svg";
import "./styles/portfolio.css";

const Portfolio = () => {
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
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
