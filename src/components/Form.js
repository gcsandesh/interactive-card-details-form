import React from "react";
import "../styles/form.css";
export default function Form(props) {
  return (
    <div className="form--container container">
      <form className="flex--col" onSubmit={props.handleSubmit}>
        {/* CARD HOLDER NAME INPUT */}
        <div className="formItem flex--col">
          <label className="formItem__label" htmlFor="cardHolderName">
            Cardholder Name
          </label>
          <input
            className="formItem__input"
            type="text"
            name="cardHolderName"
            onChange={props.handleInputChange}
            placeholder="e.g. Hari Bahadur"
            maxLength={32}
            onInput={props.handleMaxInput}
            // value={props.formData.cardHolderName}
            required
          />
          <span className="error--msg">Wrong format, text only</span>
        </div>
        {/* CARD NUMBER INPUT */}
        <div className="formItem flex--col">
          <label className="formItem__label" htmlFor="cardNumber">
            Card Number
          </label>
          <input
            className="formItem__input"
            type="number"
            name="cardNumber"
            onChange={props.handleInputChange}
            maxLength="16"
            onInput={props.handleMaxInput}
            // value={props.formData.cardNumber}
            placeholder="e.g. 1234 5678 9123 0000"
            required
          />
          {/* <span className="error--msg">Wrong format, numbers only</span> */}
        </div>
        {/* end of card number input */}
        {/* EXPIRY DATE & CVC NUMBER INPUT */}
        <div className="expiryDate__cvc formItem flex--row">
          <div className="expiryDate__container flex--col">
            <label className="formItem__label" htmlFor="expiryDate">
              Exp. Date (MM/YY)
            </label>
            {/* EXPIRY MONTH INPUT */}
            <span className="flex--row expiryDate__input--container">
              <input
                className="formItem__input expiryDate"
                type="number"
                min="1"
                max="12"
                name="expiryMonth"
                placeholder="MM"
                onChange={props.handleInputChange}
                maxLength={2}
                onInput={props.handleMaxInput}
                // value={props.formData.expiryMonth}
                required
              />
              {/* EXPIRY YEAR INPUT */}
              <input
                className="formItem__input expiryDate"
                type="number"
                name="expiryYear"
                min="00"
                max="99"
                placeholder="YY"
                onChange={props.handleInputChange}
                maxLength={2}
                onInput={props.handleMaxInput}
                // value={props.formData.expiryYear}
                required
              />
            </span>
            <span className="error--msg">Can't be blank</span>
          </div>
          {/* CVC NUMBER INPUT */}
          <div className="flex--col cvc__input--container">
            <label className="formItem__label" htmlFor="cvc">
              CVC
            </label>
            <input
              className="formItem__input cvc__input"
              type="number"
              name="cvc"
              min="000"
              max="999"
              placeholder="e.g. 123"
              onChange={props.handleInputChange}
              maxLength={3}
              onInput={props.handleMaxInput}
              // value={props.formData.cvc}
              required
            />
            <span className="error--msg">Can't be blank</span>
          </div>
        </div>
        {/* END OF INPUTS */}
        <button className="btn confirm-btn">Confirm</button>
      </form>
    </div>
  );
}
