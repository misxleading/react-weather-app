import React from "react";
import "./Current.css";

export default function Current(props) {
  return (
    <div className="current">
      <div className="selected-city">
        <h1>{props.data.city}</h1>
        <p className="date">
          Updated: <span>Day, 00, Month, 00:00</span>
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
          <h5 id="high">{Math.round(props.data.high)}°C</h5>
          <p className="add">High</p>
        </div>
        <div className="item">
          <h5 id="wind">16kmph</h5>
          <p className="add">Wind</p>
        </div>
        <div className="item">
          <h5 id="sunrise">04:49</h5>
          <p className="add">Sunrise</p>
        </div>
        <div className="item">
          <h5 id="low">{Math.round(props.data.low)}°C</h5>
          <p className="add">Low</p>
        </div>
        <div className="item">
          <h5 id="rain">{props.data.humidity}%</h5>
          <p className="add">Humidity</p>
        </div>
        <div className="item">
          <h5 id="sunset">21:13</h5>
          <p className="add">Sunset</p>
        </div>
      </div>
    </div>
  );
}
