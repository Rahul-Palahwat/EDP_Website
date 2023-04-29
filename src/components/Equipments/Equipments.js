import React, { useEffect, useState } from "react";
import "./Equipments.css";
import LightOn from "../../images/LightOn.webp";
import LightOff from "../../images/offBulb1.webp";
// import FanOff from "../../images/Fanoff1.png";
import On from "../../images/on3.png";
import Off from "../../images/off3.png";
import Card from "../Card/Card";

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

  useEffect(() => {
    getAPI();
  }, []);
  return (
    <div
      className="box"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <h2 style={{ padding: "2rem", color: "white" }}>Equipments</h2>
      {light1 ? (
        <Card
          image={LightOn}
          button={On}
          Comp="Light1"
          operate={operateLight1}
        />
      ) : (
        <Card
          image={LightOff}
          button={Off}
          Comp="Light1"
          operate={operateLight1}
        />
      )}
      {fan1 ? (
        <Card image={LightOn} button={On} Comp="Fan1" operate={operateFan1} />
      ) : (
        <Card image={LightOff} button={Off} Comp="Fan1" operate={operateFan1} />
      )}

      {/* <button
        type="button"
        className="btn btn-primary"
        style={{
          marginBottom: "4rem",
          background: "#008E8B",
          border: "1px solid #008E8B",
        }}
      >
        Add More
      </button> */}

      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
        style={{
          marginBottom: "4rem",
          background: "#008E8B",
          border: "1px solid #008E8B",
        }}
      >
        Add More Items
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div
            className="modal-content"
            style={{ background: "#008E8B", color: "white" }}
          >
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add Component
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Equipment name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="recipient-name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">
                    Use:
                  </label>
                  <textarea
                    className="form-control"
                    id="message-text"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                style={{
                  background: "#0A4040",
                  border: "1px solid #000729",
                }}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* {light2 ? (
        <Card
          image={LightOn}
          button={On}
          Comp="Light2"
          operate={operateLight2}
        />
      ) : (
        <Card
          image={LightOff}
          button={Off}
          Comp="Light2"
          operate={operateLight2}
        />
      )} */}
      {/* {light1 ? (
        <div className="device">
          <div className="image">
            <img src={LightOn} alt="" />
          </div>
          <div className="toggle" onClick={operateLight1}>
            <img src={On} alt="" />
          </div>
        </div>
      ) : (
        <div className="device">
          <div className="image">
            <img src={LightOff} alt="" />
          </div>
          <div className="toggle" onClick={operateLight1}>
            <img src={Off} alt="" />
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
            <img src={On} alt="" />
          </div>
        </div>
      ) : (
        <div className="device">
          <div className="image">
            <img src={FanOff} alt="" />
          </div>
          <div className="toggle" onClick={operateFan1}>
            <img src={Off} alt="" />
          </div>
        </div>
      )}
      {light2 ? (
        <div className="device">
          <div className="image">
            <img src={LightOn} alt="" />
          </div>
          <div className="toggle" onClick={operateLight2}>
            <img src={On} alt="" />
          </div>
        </div>
      ) : (
        <div className="device">
          <div className="image">
            <img src={LightOff} alt="" />
          </div>
          <div className="toggle" onClick={operateLight2}>
            <img src={Off} alt="" />
          </div>
        </div>
      )} */}
    </div>
  );
};

export default Equipments;
