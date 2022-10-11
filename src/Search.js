import React, { useState } from "react";
import "./Search.css";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
  let [loading, setLoading] = useState(false);

  function showWeather(response) {
    console.log(response.data);
    setWeather({
      temp: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
    setLoading(true);
  }

  function handleSubmit(event) {
    event.preventDefault();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=019d56ca36b2672fd8b69d369f52f303&units=metric`;
    axios.get(url).then(showWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  if (loading) {
    return (
      <div className="Search">
        <h3> Weather App</h3>
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
        <ul>
          <li>Temperature: {Math.round(weather.temp)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} width="44px" />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <h3> Weather App</h3>
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
      </div>
    );
  }
}
