import { formatTimestampToReadableDate } from "../utils/DateUtils";
import WeatherItem from "./WeatherItem";

const WeatherList = ({ dailyWeather }) => {
  return (
    <div>
      <div className="py-4 border-y border-[#dedede]">
        <h2 className="text-xl font-semibold">
          {formatTimestampToReadableDate(dailyWeather[0].dt)}
        </h2>
        {dailyWeather.map((hourlyWeather, index) => (
          <WeatherItem key={index} hourlyWeather={hourlyWeather} />
        ))}
      </div>
    </div>
  );
};

export default WeatherList;
