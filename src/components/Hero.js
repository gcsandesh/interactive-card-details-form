import React from "react";
import Card from "./Card"
export default function Hero() {
  return (
    <div className="hero">
      <div className="container cards--container flex--row">
        {/* contains cards */}
        <Card isFrontFace={false} />
        <Card isFrontFace={true}/>
      </div>
    </div>
  );
}
