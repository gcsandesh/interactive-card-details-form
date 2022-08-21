import React from "react";
export default function Form(props) {
  return (
    <div className="form--container container">
      <form className="flex--col" onSubmit={props.handleSubmit}>
        <label className="formItem__label" htmlFor="cardHolderName">
          Cardholder Name
        </label>
        <input
          className="formItem__input"
          type="text"
          name="cardHolderName"
          onChange={props.handleInputChange}
          placeholder="e.g. Hari Bahadur"
          // value={props.formData.cardHolderName}
          // required
        />
        <label className="formItem__label" htmlFor="cardNumber">
          Card Number
        </label>
        <input
          className="formItem__input"
          type="number"
          name="cardNumber"
          onChange={props.handleInputChange}
          maxLength="16"
          // value={props.formData.cardNumber}
          placeholder="e.g. 1234 5678 9123 0000"
          // required
        />
        <div className="expiryDate__cvc flex--row">
          <span className="expiryDate__container">
            <label className="formItem__label" htmlFor="expiryDate">
              Exp. Date (MM/YY)
            </label>
            <span className="flex--row expiryDate__input--container">
              <input
                className="formItem__input expiryDate"
                type="number"
                min="1"
                max="12"
                name="expiryMonth"
                placeholder="MM"
                onChange={props.handleInputChange}
                // value={props.formData.expiryMonth}
                // required
              />
              <input
                className="formItem__input expiryDate"
                type="number"
                name="expiryYear"
                min="00"
                max="99"
                placeholder="YY"
                onChange={props.handleInputChange}
                // value={props.formData.expiryYear}
                // required
              />
            </span>
          </span>
          <span className="flex--col cvc__input--container">
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
              // value={props.formData.cvc}
              // required
            />
          </span>
        </div>
        <button className="btn confirm-btn">Confirm</button>
      </form>
    </div>
  );
}
