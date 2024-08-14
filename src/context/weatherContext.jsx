import { createContext, useContext, useState } from "react";

export const WeatherContext = createContext({
  searchInput: "",
  setSearchInput: () => {},
});

export function useGlobalContext() {
  return useContext(WeatherContext);
}

const useProvideGlobal = () => {
  const [searchInput, setSearchInput] = useState("");

  return {
    searchInput,
    setSearchInput,
  };
};

export const GlobalProvider = ({ children }) => {
  const globalData = useProvideGlobal();
  return (
    <WeatherContext.Provider value={globalData}>
      {children}
    </WeatherContext.Provider>
  );
};
