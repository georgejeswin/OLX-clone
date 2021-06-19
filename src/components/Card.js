import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card__top">
        <img
          src="https://apollo-singapore.akamaized.net/v1/files/abh6olhh8hmu1-IN/image;s=300x600;q=60"
          alt=""
        />
      </div>
      <div className="card__top-fas">
        <i class="far fa-heart"></i>
      </div>
      <div className="card__bottom">
        <h2>&#8377; 23,234</h2>
        <p className="card__year">2020</p>
        <p className="card__model">Oppo Reno X</p>
        <div className="card__own">
          <small>Owner</small>
          <small>JUN 10</small>
        </div>
      </div>
    </div>
  );
};

export default Card;
