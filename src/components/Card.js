import React from "react";
import cardFrontImg from "../images/bg-card-front.png";
import cardBackImg from "../images/bg-card-back.png";
export default function Card(props) {
  return props.isFrontFace ? (
    <div className="card front--card">
      <img
        src={cardFrontImg}
        className="card__img front--img"
        alt="front face of virtual card"
      />
      <div className="card__details container flex--col">
        <span className="card__cardNumber">0000 0000 0000 0000</span>
        <div className="card__cardName__expiryDate flex--row">
          <div className="card__cardName">Hari Bahadur</div>
          <div className="card__expiryDate">12/04</div>
        </div>
      </div>
    </div>
  ) : (
    <div className="card back--card">
      <img
        src={cardBackImg}
        className="card__img back--img"
        alt="back face of virtual card"
      />
      <span className="card__cvcNum">000</span>
    </div>
  );
}
