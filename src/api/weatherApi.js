import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;

export const getCoordinatesByLocation = async (location) => {
  try {
    const { data: response } = await axios.get(
      `https://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${API_KEY}`
    );

    return response;
  } catch (error) {
    console.error(error.message);
  }
};

export const getWeather = async (lat, lon, temperatureUnit) => {
  try {
    const { data: response } = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=${temperatureUnit}&appid=${API_KEY}`
    );

    return response;
  } catch (error) {
    console.error(error.message);
  }
};
