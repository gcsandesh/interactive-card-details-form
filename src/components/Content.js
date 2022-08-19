import React from "react";
export default function Content(props) {
  // const date = new Date();
  // const year = date.getFullYear();
  // console.log(year);
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
        />
        <label className="formItem__label" htmlFor="cardNumber">
          Card Number
        </label>
        <input
          className="formItem__input"
          type="text"
          name="cardNumber"
          onChange={props.handleInputChange}
          // value={props.formData.cardNumber}
          placeholder="e.g. 1234 5678 9123 0000"
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
            />
          </span>
        </div>
        <button className="btn confirm-btn">Confirm</button>
      </form>
    </div>
  );
}
