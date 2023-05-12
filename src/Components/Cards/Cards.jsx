import React from "react";
import "../Cards/Cards.css";

const Cards = ({ img }) => (
  <div style={{ borderRadius: "12px" }} className="card">
    <img src={img} />
  </div>
);

export default Cards;
