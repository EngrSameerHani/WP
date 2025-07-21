import { createContext, useEffect, useState } from 'react';
import {
  DEFAULT_PLACE,
  MEASUREMENT_SYSTEMS,
  UNITS,
} from '../constants';
import { getWeatherData } from '../api';

const WeatherContext = createContext();

function WeatherProvider({ children }) {
  const [place, setPlace] = useState(DEFAULT_PLACE);
  const [loading, setLoading] = useState(true);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState([]);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [measurementSystem, setMeasurementSystem] = useState(
    MEASUREMENT_SYSTEMS.AUTO
  );
  const [units, setUnits] = useState({});

  useEffect(() => {
    async function _getWeatherData() {
      setLoading(true);

      const cw = await getWeatherData('current', place.place_id, measurementSystem);
      if (cw && cw.current) {
        setCurrentWeather(cw.current);
        setUnits(UNITS[cw.units] || {});
      } else {
        console.error('Invalid current weather data:', cw);
        setCurrentWeather(null);
        setUnits({});
      }

      const hf = await getWeatherData('hourly', place.place_id, measurementSystem);
      if (hf && hf.hourly && Array.isArray(hf.hourly.data)) {
        setHourlyForecast(hf.hourly.data);
      } else {
        console.error('Invalid hourly forecast data:', hf);
        setHourlyForecast([]);
      }

      const df = await getWeatherData('daily', place.place_id, measurementSystem);
      if (df && df.daily && Array.isArray(df.daily.data)) {
        setDailyForecast(df.daily.data);
      } else {
        console.error('Invalid daily forecast data:', df);
        setDailyForecast([]);
      }

      setLoading(false);
    }

    if (place?.place_id) {
      _getWeatherData();
    }
  }, [place, measurementSystem]);

  return (
    <WeatherContext.Provider
      value={{
        place,
        setPlace,
        loading,
        currentWeather,
        hourlyForecast,
        dailyForecast,
        measurementSystem,
        setMeasurementSystem,
        units,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export { WeatherProvider };
export default WeatherContext;
