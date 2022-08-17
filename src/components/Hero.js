import React from "react";

export default function Hero() {
  return (
    // the hero with bg Image and full width with col flex and align+justify center
    <div className="hero">
      <div className="container cards--container flex--col">
        {/* contains cards */}
        <div className="card__back--container">
          <div className="card__back--img">This is the back side</div>
          <div className="card__front--container">
            <div className="card__front--img">Front side</div>
          </div>
        </div>
      </div>
    </div>
  );
}
