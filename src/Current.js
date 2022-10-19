import React from "react";
import "./Current.css";
import Date from "./Date";

export default function Current(props) {
  return (
    <div className="current">
      <div className="selected-city">
        <h1>{props.data.city}</h1>
        <p className="date">
          Updated:{" "}
          <span>
            {" "}
            <Date date={props.data.date} />
          </span>
        </p>
        <div className="icon-current">
          <img
            className="icon"
            src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/144/apple/325/cloud-with-lightning-and-rain_26c8-fe0f.png"
            alt=""
          />
          <p className="temp">
            <span id="temp">{Math.round(props.data.temperature)}</span>
            <span>°</span>
            <a id="celsius" href="" className="active">
              C
            </a>
            /
            <a id="fahrenheit" href="">
              F
            </a>
          </p>
        </div>

        <p className="description">{props.data.description}</p>
      </div>

      <div className="characterictics">
        <div className="item">
          <h5 id="high">{Math.round(props.data.feels_like)}°C</h5>
          <p className="add">Feels like</p>
        </div>
        <div className="item">
          <h5 id="wind">{Math.round(props.data.wind)}kmph</h5>
          <p className="add">Wind</p>
        </div>
        <div className="item">
          <h5 id="sunrise">{props.data.pressure}</h5>
          <p className="add">Pressure</p>
        </div>

        <div className="item">
          <h5 id="rain">{props.data.humidity}%</h5>
          <p className="add">Humidity</p>
        </div>
      </div>
    </div>
  );
}
