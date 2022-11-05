import React from "react";
import Icon from "./Icon";

export default function WeatherForecastPreview(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);

    return `${temperature}`;
  }

  return (
    <div className="ForecastPreview">
      <div className="card">
        <p className="card-date">{day()}</p>
        <Icon code={props.data.condition.icon} size={38} />
        <div className="card-body">
          <h5 className="card-temp">{maxTemperature()}°C</h5>
        </div>
      </div>
    </div>
  );
}
