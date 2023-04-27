import React, { useEffect, useState } from "react";
import "../App.css";
import LightOn from "../images/LightOn.webp";
import LightOff from "../images/offBulb1.webp";
import FanOff from "../images/Fanoff1.png";
import On from "../images/on3.png";
import Off from "../images/off3.png";

const Equipments = () => {
  const [fan1, setFan1] = useState(false);
  const [light1, setLight1] = useState(false);
  const [light2, setLight2] = useState(false);
  const [api, setApi] = useState("");

  let off = "off";
  let on = "on";

  const operateLight1 = async () => {
    setLight1(!light1);
    const response = await fetch(`Http://${api}/app1/${light1 ? off : on}`, {
      method: "GET",
    });
  };
  const operateFan1 = async () => {
    setFan1(!fan1);
    const response = await fetch(`Http://${api}/app3/${fan1 ? off : on}`, {
      method: "GET",
    });
  };
  const operateLight2 = async () => {
    setLight2(!light2);
    const response = await fetch(`Http://${api}/app2/${light2 ? off : on}`, {
      method: "GET",
    });
  };

  const getAPI = async () => {
    const response = await fetch(
      `https://room-automation.vercel.app/fetchurl`,
      {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const json = await response.json();
    console.log(json, "from backend");
    setApi(json.ip);
    console.log(api, "api to fetch data");
  };

  //   useEffect(() => {}, [light1, light2, fan1]);
  useEffect(() => {
    getAPI();
  }, []);
  return (
    <div className="box">
      {light1 ? (
        <div className="device">
          <div className="image">
            <img src={LightOn} alt="" />
          </div>
          <div className="toggle" onClick={operateLight1}>
            <img src={Off} alt="" />
          </div>
        </div>
      ) : (
        <div className="device">
          <div className="image">
            <img src={LightOff} alt="" />
          </div>
          <div className="toggle" onClick={operateLight1}>
            <img src={On} alt="" />
          </div>
        </div>
      )}
      {fan1 ? (
        <div className="device">
          <div className="image">
            <img
              src="https://cdn.dribbble.com/users/3892547/screenshots/11096911/media/e953f570282731a9e81adb0f560d6627.gif"
              alt=""
            />
          </div>
          <div className="toggle" onClick={operateFan1}>
            <img src={Off} alt="" />
          </div>
        </div>
      ) : (
        <div className="device">
          <div className="image">
            <img src={FanOff} alt="" />
          </div>
          <div className="toggle" onClick={operateFan1}>
            <img src={On} alt="" />
          </div>
        </div>
      )}
      {light2 ? (
        <div className="device">
          <div className="image">
            <img src={LightOn} alt="" />
          </div>
          <div className="toggle" onClick={operateLight2}>
            <img src={Off} alt="" />
          </div>
        </div>
      ) : (
        <div className="device">
          <div className="image">
            <img src={LightOff} alt="" />
          </div>
          <div className="toggle" onClick={operateLight2}>
            <img src={On} alt="" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Equipments;
