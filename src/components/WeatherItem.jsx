import { formatUnixTimestampTo12Hour } from "../utils/DateUtils";

const WeatherItem = ({ hourlyWeather }) => {
  return (
    <div className="flex items-center py-[10px] px-[16px] justify-between border-b border-[#dedede] last:border-b-0">
      <div className="w-[20%]">
        {formatUnixTimestampTo12Hour(hourlyWeather.dt)}
      </div>
      <div className="w-[20%] text-xl font-semibold">
        {Math.round(hourlyWeather.main.temp)}°
      </div>
      <div className="w-[20%]">{hourlyWeather.weather[0].main}</div>
      <div className="w-[20%]">🌧{hourlyWeather.pop * 100}%</div>
      <div className="w-[20%]">
        💨{Math.round(hourlyWeather.wind.speed)} mph
      </div>
    </div>
  );
};

export default WeatherItem;
