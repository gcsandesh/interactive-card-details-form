import React from "react";
import "../styles/form.css";
export default function Form(props) {
  return (
    <div className="form--container container">
      <form className="flex--col form" onSubmit={props.handleSubmit}>
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
          />
        <span className="error--msg">{props.errorList.cardHolderName}</span>
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
            placeholder="e.g. 1234 5678 9123 0000"
          />
        <p className="error--msg">{props.errorList.cardNumber}</p>
        </div>
        {/* end of card number input */}
        {/* EXPIRY DATE & CVC NUMBER INPUT */}
        <div className="expiryDate__cvc flex--row">
          <div className="expiryDate__container flex--col formItem">
            <label className="formItem__label" htmlFor="expiryDate">
              Exp. Date (MM/YY)
            </label>
            {/* EXPIRY MONTH INPUT */}
            <div className="flex--row expiryDate__input--container">
              <input
                className="formItem__input expiryDate"
                type="number"
                name="expiryMonth"
                placeholder="MM"
                onChange={props.handleInputChange}
                maxLength={2}
                onInput={props.handleMaxInput}
                // value={props.formData.expiryMonth}
              />
              {/* EXPIRY YEAR INPUT */}
              <input
                className="formItem__input expiryDate"
                type="number"
                name="expiryYear"
                placeholder="YY"
                onChange={props.handleInputChange}
                maxLength={2}
                onInput={props.handleMaxInput}
              />
            </div>
            <p className="error--msg">{props.errorList.expiryDate}</p>
          </div>
          {/* CVC NUMBER INPUT */}
          <div className="flex--col cvc__input--container formItem">
            <label className="formItem__label" htmlFor="cvc">
              CVC
            </label>
            <input
              className="formItem__input cvc__input"
              type="number"
              name="cvc"
              min="100"
              max="999"
              placeholder="e.g. 123"
              onChange={props.handleInputChange}
              maxLength={3}
              onInput={props.handleMaxInput}
            />
            <p className="error--msg">{props.errorList.cvc}</p>
          </div>
        </div>
        {/* END OF INPUTS */}
        <button className="btn confirm-btn">Confirm</button>
      </form>
    </div>
  );
}
