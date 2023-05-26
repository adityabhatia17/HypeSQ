import { HypeSQLogo } from "../../../Assets/svg";
import NavBar from "../../App/Layout";
import { motion } from "framer-motion";
import "./styles.css";

const Home = () => {
  return (
    <div>
      <NavBar />
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
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <div>A</div>
              <div>
                <HypeSQLogo width={100} />
              </div>
              <div>tive</div>
            </div>
          </motion.h1>
          <motion.p
            className="para"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            One Stop Solution For All Your{" "}
            <span className="span-text">Digital</span> Needs
          </motion.p>
          {/* <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="/dashboard">
            <Button text="Dashboard" />
          </a>
          <RWebShare
            data={{
              text: "Crypto Dashboard made using React JS.",
              url: "https://crypto-dashboard-dec.netlify.app/",
              title: "CryptoDashboard.",
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <Button text="Share App" outlined={true} />
          </RWebShare>
        </motion.div> */}
        </div>
      </div>
    </div>
  );
};
export default Home;
