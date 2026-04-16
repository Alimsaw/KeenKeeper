import { useState } from "react";
import { PrimeContext } from "./usePrimeContext";

const PrimeProvider = ({ children }) => {
  const [interactionHistory, setInteractionHistory] = useState([]);

  const sharedValues = {
    timeline: interactionHistory,
    setTimeline: setInteractionHistory,
  };

  return <PrimeContext.Provider value={sharedValues}>{children}</PrimeContext.Provider>;
};

export default PrimeProvider;