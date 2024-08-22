import { createContext, ReactNode, useState } from "react";

export interface MainResearchType {
  isScroll: boolean;
  setIsScroll: (value: boolean) => void;
}

const MainResearchValues: MainResearchType = {
  isScroll: false,
  setIsScroll: () => ({}),
};
const CheckScrollContext = createContext(MainResearchValues);

const CheckScrollProvider = ({ children }: { children: ReactNode }) => {
  const [isScroll, setIsScroll] = useState(false);

  const value = {
    isScroll,
    setIsScroll,
  };

  return (
    <CheckScrollContext.Provider value={value}>
      {children}
    </CheckScrollContext.Provider>
  );
};

export { CheckScrollContext, CheckScrollProvider };
