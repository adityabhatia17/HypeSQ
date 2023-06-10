import { motion } from "framer-motion";
import "./styles.css";
import {
  BharatBazar,
  GuapConcept,
  HypeSQLogo,
  StarSmiles,
} from "../../../Assets/svg";

const SpectacularClients = () => {
  return (
    <div className="landing-clients-wrapper">
      {/* <div className="landing-left">
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
      <div className="landing-clients-right">
        <GuapConcept />
        <GuapConcept />
        <GuapConcept />
        <GuapConcept />
        <GuapConcept />
        <GuapConcept />
        <GuapConcept />
      </div> */}
      <div>
        <motion.h1
          className="heading-clients"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
            <div>Our</div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>Spe</div>
              <div style={{ marginTop: "20px" }}>
                <HypeSQLogo className="q-class" />
              </div>
            </div>
            <div>tacular</div>
            <div> Clients</div>
          </div>
        </motion.h1>
      </div>
      <div className="clients">
        <div className="row-1">
          <GuapConcept className="client-logo" />
          <StarSmiles className="client-logo" />
          <BharatBazar className="client-logo" />
          <GuapConcept className="client-logo" />
        </div>
        <div className="row-2">
          <GuapConcept className="client-logo" />
          <GuapConcept className="client-logo" />
        </div>
      </div>
    </div>
  );
};
export default SpectacularClients;
