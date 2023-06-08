import { motion } from "framer-motion";
import "./styles.css";
import { GuapConcept, HypeSQLogo } from "../../../Assets/svg";

const SpectacularClients = () => {
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
            <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <div>Our</div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div>Spe</div>
                <div style={{ marginTop: "20px" }}>
                  <HypeSQLogo className="q-class" />
                </div>
              </div>
              <div>tacular</div>
            </div>
          </motion.h1>
          <motion.h1
            className="heading-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Clients
          </motion.h1>
        </div>
        <div className="landing-right">
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <GuapConcept />
            <GuapConcept />
            <GuapConcept />
            <GuapConcept />
            <GuapConcept />
            <GuapConcept />
            <GuapConcept />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SpectacularClients;
