import { createContext, useContext, useState } from "react";

export const WeatherContext = createContext({
  searchInput: "",
  setSearchInput: () => {},
  temperatureUnit: "imperial",
  setTemperatureUnit: () => {},
});

export function useGlobalContext() {
  return useContext(WeatherContext);
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
    <WeatherContext.Provider value={globalData}>
      {children}
    </WeatherContext.Provider>
  );
};
