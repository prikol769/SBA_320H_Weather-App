import axios from "axios";

const API_KEY = "91c3e8167a6820344378e26b2e631bad";

export const getCoordinatesByLocation = async (location) => {
  try {
    const { data: response } = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${API_KEY}`
    );

    return response;
  } catch (error) {
    console.error(error.message);
  }
};

export const getWeather = async (lat, lon) => {
  try {
    const { data: response } = await axios.get(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`
    );

    return response;
  } catch (error) {
    console.error(error.message);
  }
};
