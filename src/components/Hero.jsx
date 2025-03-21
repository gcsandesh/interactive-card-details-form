import React from "react";
import Card from "./Card";
export default function Hero(props) {
  return (
    <div className="hero">
      <div className="container cards--container flex--row">
        {/* contains cards */}
        <Card formData={props.formData} handleInputChange={props.handleInputChange} isFrontFace={false} />
        <Card formData={props.formData} handleInputChange={props.handleInputChange} isFrontFace={true} />
      </div>
    </div>
  );
}
