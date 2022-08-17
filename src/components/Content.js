import React from "react";
export default function Content() {
  return (
    <div className="form--container container">
      <form className="flex--col">
        <label className="formItem__label" htmlFor="cardHolderName">
          Cardholder Name
        </label>
        <input className="formItem__input"type="text" name="cardHolderName" placeholder="e.g. Hari Bahadur" />
        <label className="formItem__label" htmlFor="cardNumber">
          Card Number
        </label>
        <input
          className="formItem__input"type="number"
          name="cardNumber"
          placeholder="e.g. 1234 5678 9123 0000"
        />
        <label className="formItem__label" htmlFor="expiryDate">
          Exp. Date (MM/YY)
        </label>
        <input
          className="formItem__input"type="number"
          min="1"
          max="12"
          name="expiryMonth"
          placeholder="MM"
        />
        <input className="formItem__input"type="number" name="expiryYear" placeholder="YY" />
        <label className="formItem__label" htmlFor="cvc">
          CVC
        </label>
        <input className="formItem__input"type="number" name="cvc" placeholder="e.g. 123" />
      </form>
    </div>
  );
}
