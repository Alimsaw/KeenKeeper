import { createContext, useContext } from "react";

export const PrimeContext = createContext(null);

const usePrimeContext = () => {
  return useContext(PrimeContext);
};

export default usePrimeContext;