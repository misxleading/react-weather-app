import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import Current from "./Current";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.city);

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
      high: response.data.temperature.max,
      low: response.data.temperature.min,
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
    const apiKey = "eac360db5fc86ft86450f3693e73o43f";
    let apiUrl = `https://api.shecodes.io/v1/weather/current?query=${city}&key=${apiKey}&units=metric`;
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
          <button>Current</button>
        </form>
        <Current data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
