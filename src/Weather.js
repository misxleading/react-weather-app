import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Current from "./Current";
import Forecast from "./Forecast.js";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      date: new Date(response.data.time * 1000),
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
      feels_like: response.data.temperature.feels_like,
      pressure: response.data.temperature.pressure,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = `99db4fc42tafb54418o7ed93b9043275`;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="search" id="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="city-input"
            id="city-input"
            placeholder="Enter a city"
            onChange={updateCity}
          />
          <input type="submit" value="Search" className="search-city" />
        </form>
        <Current data={weatherData} />
        <Forecast
          coordinates={weatherData.coordinates}
          city={weatherData.city}
        />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
