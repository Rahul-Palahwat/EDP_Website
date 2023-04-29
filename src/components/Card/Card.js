import React from "react";
import "./Card.css";

const Card = ({ image, button, Comp, operate }) => {
  return (
    <div className="card-body">
      <div
        className="card"
        style={{
          width: "18rem",
          paddingTop: "1rem",
          borderRadius: "2rem",
          background: "linear-gradient(#008E8B , #000729)",
          //   background: "linear-gradient(#00545d , #000729)",
          border: "1px solid white",
          color: "white",
        }}
      >
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{Comp}</h5>
          <img src={button} alt="" onClick={operate} />
        </div>
      </div>
    </div>
  );
};

export default Card;
