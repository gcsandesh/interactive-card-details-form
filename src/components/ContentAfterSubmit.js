import React from "react";
import checkedImg from "../images/icon-complete.svg"
export default function ContentAfterSubmit(props) {
  return (
    <main className="after__submit--content container flex--col items--center">
        <img src={checkedImg} className="complete--icon" alt="check mark"/>
        <h2 className="uppercase--text">Thank You!</h2>
        <p>We've added your card details</p>
        <button className="btn" onClick={props.handleContinue}>Continue</button>
    </main>
  );
}
