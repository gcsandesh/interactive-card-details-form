import React from "react";
import cardFrontImg from "../images/bg-card-front.png";
import cardBackImg from "../images/bg-card-back.png";
import cardLogo from "../images/card-logo.svg"
export default function Card(props) {
  return props.isFrontFace ? (
    <div className="card front--card">
      <img
        src={cardFrontImg}
        className="card__img front--img"
        alt="front face of virtual card"
      />
      <div className="card__details container flex--col">
      <img src={cardLogo} className="card--logo" alt="card logo"/>
        <span className="card__cardNumber">{props.formData.cardNumber}</span>
        <div className="card__cardName__expiryDate flex--row">
          <div className="card__cardName">{props.formData.cardHolderName}</div>
          <div className="card__expiryDate">{props.formData.expiryMonth}/{props.formData.expiryYear}</div>
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
      <span className="card__cvcNum">{props.formData.cvc}</span>
    </div>
  );
}
