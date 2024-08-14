import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext({
  searchInput: "",
  setSearchInput: () => {},
  temperatureUnit: "imperial",
  setTemperatureUnit: () => {},
});

export function useGlobalContext() {
  return useContext(GlobalContext);
}

const useProvideGlobal = () => {
  const [searchInput, setSearchInput] = useState("");
  const [temperatureUnit, setTemperatureUnit] = useState("imperial");

  return {
    searchInput,
    setSearchInput,
    temperatureUnit,
    setTemperatureUnit,
  };
};

export const GlobalProvider = ({ children }) => {
  const globalData = useProvideGlobal();
  return (
    <GlobalContext.Provider value={globalData}>
      {children}
    </GlobalContext.Provider>
  );
};
