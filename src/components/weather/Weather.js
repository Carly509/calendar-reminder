import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getWeather } from "../../features/weather/WeatherSlice";
import { color } from "../../utils/constants";

const Weather = ({ city, currentDate, id }) => {
  const weather = useSelector((state) => state.weather.weather);
  const dispatch = useDispatch();

  const uniqueWeather = weather.filter(
    (weather, index, self) =>
      index === self.findIndex((t) => t.id === weather.id)
  );

  const weatherUniq = uniqueWeather.filter((e) => e.id === id);

  useEffect(() => {
    const fetchApi = async () => {
      const values = {
        city: city,
        date: currentDate,
        id: id,
      };
      dispatch(getWeather(values));
    };
    fetchApi();
  }, [dispatch, city, currentDate, id]);

  return (
    <div>
      {weatherUniq.map((day) => (
        <div key={day.datetime} style={styles.weatherContainer}>
          <div style={styles.temperatureDiv}>
            <p style={styles.tempText}>{day.temp}°</p>
            <p style={styles.tempCity}>{city}</p>
          </div>
          <div style={styles.currentWeather}>
            <div style={styles.currentWeatherDiv}>
              <p style={styles.currentWeatherText}>{day.conditions}</p>
              <p style={styles.currentWeatherDesc}> {day.description}</p>
            </div>
            <div style={styles.minMaxTemp}>
              <span>
                {day.tempmin}°C / {day.tempmax}°C{" "}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Weather;

export const styles = {
  weatherContainer: {
    width: "400px",
    height: "200px",
    fontFamily: "open sans",
  },
  temperatureDiv: {
    width: "120px",
    height: "100px",
    background: "rgb(41, 41, 41)",
    marginLeft: "20px",
  },
  currentWeather: {
    with: "50px",
    height: "70px",
    background: color.tertiary,
    marginLeft: "10rem",
    marginTop: "-7.2rem",
  },
  tempText: {
    color: color.tertiary,
    fontSize: "30px",
    textAlign: "center",
    display: "block",
    fontweight: 300,
    padding: "10px 0 0",
  },
  tempCity: {
    color: color.tertiary,
    fontSize: "18px",
    textAlign: "center",
    display: "block",
  },
  minMaxTemp: {
    width: "100%",
    height: "30px",
    background: "rgb(42, 178, 234)",
    color: color.tertiary,
    textAlign: "center",
    fontweight: 700,
    marginTop: "7px",
    padding: "5px 0",
  },
  currentWeatherDiv: {
    display: "block",
    textAlign: "center",
    padding: "10px 0 0",
  },
  currentWeatherText: {
    fontweight: 500,
    fontSize: "20px",
  },
  currentWeatherDesc: {
    fontweight: 300,
    fontSize: "8px",
  },
};
