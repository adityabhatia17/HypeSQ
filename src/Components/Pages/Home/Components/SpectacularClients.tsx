import { motion } from "framer-motion";
import "../styles.css";
import "./styles/spectacularClients.css";
import {
  BharatBazar,
  Cardiologix,
  GuapConcept,
  HypeSQLogo,
  Medanta,
  SMSHEG,
  StarSmiles,
} from "../../../../Assets/svg";

const SpectacularClients = () => {
  return (
    <div className="landing-clients-wrapper">
      <div>
        <motion.h1
          className="heading-clients"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <div>Our</div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span>Spe</span>
              <HypeSQLogo className="q-class-clients" />
              <span>tacular</span>
            </div>
            <div>Clients</div>
          </div>
        </motion.h1>
      </div>
      <div className="clients">
        <div className="row-1">
          <StarSmiles className="client-logo" />
          <GuapConcept className="client-logo" />
          <BharatBazar className="client-logo" />
          <Medanta className="client-logo" />
          <SMSHEG className="client-logo" />
          <Cardiologix className="client-logo" />
        </div>
      </div>
    </div>
  );
};
export default SpectacularClients;
