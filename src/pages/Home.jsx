import { useEffect, useState } from "react";
import { getCoordinatesByLocation, getWeather } from "../api/weatherApi";
import WeatherList from "../components/WeatherList";
import Spinner from "../components/spinner";
import { groupByDayLocal } from "../utils/DateUtils";
import { useGlobalContext } from "../context/weatherContext";

const Home = () => {
  const { searchInput } = useGlobalContext();
  console.log(searchInput, "searchInput");

  const [weathers, setWeathers] = useState([]);
  const [cityCoordinates, setCityCoordinates] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(weathers, "weathersState");
  console.log(cityCoordinates, "cityCoordinates");

  useEffect(() => {
    if (searchInput) {
      const getCoordinatesByLocationFetch = async () => {
        setLoading(true);
        const cityCoordinatesFetch = await getCoordinatesByLocation(
          searchInput
        );
        console.log(cityCoordinatesFetch[0], "cityCoordinatesFetch");
        setCityCoordinates({
          ...cityCoordinatesFetch[0],
        });
        if (cityCoordinatesFetch.length <= 0) {
          setLoading(false);
          setWeathers([]);
        }
      };

      getCoordinatesByLocationFetch();
    }
  }, [searchInput]);

  useEffect(() => {
    if (cityCoordinates.lat && cityCoordinates.lon) {
      const getWeathersDataFetch = async () => {
        setLoading(true);
        const weathersData = await getWeather(
          cityCoordinates.lat,
          cityCoordinates.lon
        );

        const groupedByDay = groupByDayLocal(weathersData.list);

        setWeathers(groupedByDay);
        console.log(weathersData, "weathersData");
        setLoading(false);
      };
      getWeathersDataFetch();
    }
  }, [cityCoordinates]);

  if (!searchInput)
    return (
      <p className="text-3xl font-semibold min-h-[calc(100vh-126px)] flex justify-center items-center">
        Please search for the weather forecast by entering a city or zip code
      </p>
    );

  if (weathers.length <= 0 && searchInput)
    return (
      <p className="text-3xl font-semibold min-h-[calc(100vh-126px)] flex justify-center items-center">
        Sorry can't find {searchInput}
      </p>
    );

  return (
    <div className="min-h-[calc(100vh-126px)] p-6 max-w-[1400px] mx-auto">
      {loading ? (
        <div className="flex justify-center items-center h-[100%]">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="rounded-md shadow-custom px-[16px] py-[26px]">
            <h1 className="mb-10">
              <span className="text-3xl font-semibold">
                3-Hour Step Weather
              </span>{" "}
              - {cityCoordinates.name}, {cityCoordinates.state},{" "}
              {cityCoordinates.country}
            </h1>

            {weathers.map((groupedItem, index) => (
              <WeatherList key={index} dailyWeather={groupedItem} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
