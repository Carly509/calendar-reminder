import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getWeather } from "../../features/weather/WeatherSlice";
import { color } from "../../utils/constants";
import { reminderDate } from "../../utils/formatDate";

const Weather = ({
  city,
  currentDate,
  id,
  time,
  text,
  editButton,
  deleteButton,
}) => {
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
        time: time,
        text: text,
      };
      dispatch(getWeather(values));
    };
    fetchApi();
  }, [dispatch, city, currentDate, id, time, text]);

  return (
    <div>
      {weatherUniq.map((day) => (
        <div key={day.datetime} style={styles.weatherContainer}>
          <div style={styles.temperatureDiv}>
            <p style={styles.tempText}>{day.temp}°C</p>
            <p style={styles.tempCity}>{city}</p>
          </div>
          <div style={styles.currentWeather}>
            <div style={styles.buttonContainer}>
              <button
                type="button"
                style={styles.editButton}
                onClick={editButton}
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
              <button
                type="button"
                style={styles.deleteButton}
                onClick={deleteButton}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
            <div style={styles.currentWeatherDiv}>
              <p style={styles.currentWeatherText}>{day.conditions}</p>
              <p style={styles.currentWeatherDesc}> {day.description}</p>
              <span>
                {day.tempmin}°C / {day.tempmax}°C{" "}
              </span>
            </div>
            <div style={styles.minMaxTemp}>
              <p style={{ marginTop: "-5px", fontSize: "10px" }}>
                Notes: {text}{" "}
              </p>
              <div style={{ marginTop: "30px", marginLeft: "40px" }}>
                <p style={{ fontSize: "8px" }}>
                  {" "}
                  {reminderDate(currentDate)} at {time}{" "}
                </p>
              </div>
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
    // width: "400px",
    height: "200px",
    fontFamily: "open sans",
    marginBottom: "-90px",
  },
  temperatureDiv: {
    width: "120px",
    height: "120px",
    background: "rgb(41, 41, 41)",
    marginLeft: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  currentWeather: {
    with: "50px",
    height: "70px",
    background: color.tertiary,
    marginLeft: "10rem",
    marginTop: "-8.5rem",
  },
  tempText: {
    color: color.tertiary,
    fontSize: "30px",
    textAlign: "center",
    display: "block",
    fontweight: 300,
    marginTop: "10px",
  },
  tempCity: {
    color: color.tertiary,
    fontSize: "18px",
    textAlign: "center",
    display: "block",
  },
  minMaxTemp: {
    width: "100%",
    height: "51.5px",
    background: "rgb(42, 178, 234)",
    color: "#000",
    textAlign: "center",
    fontweight: 700,
    marginTop: "7px",
    padding: "5px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  currentWeatherDiv: {
    display: "block",
    textAlign: "center",
    padding: "10px 0 0",
  },
  currentWeatherText: {
    fontweight: 500,
    fontSize: "20px",
    marginTop: "-40px",
  },
  currentWeatherDesc: {
    fontweight: 300,
    fontSize: "8px",
    marginTop: "-1px",
  },
  editButton: {
    color: color.primary,
    backgroundColor: color.tertiary,
    border: "none",
    marginTop: 1,
    "&:hover": {
      backgroundColor: color.tertiary,
    },
  },
  deleteButton: {
    backgroundColor: color.tertiary,
    border: "none",
    borderRadius: "10%",
    color: "red",
    marginRight: 5,
    marginTop: 0,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
};
