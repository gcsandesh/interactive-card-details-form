import React from "react";
import Hero from "./components/Hero";
import Form from "./components/Form";
import ContentAfterSubmit from "./components/ContentAfterSubmit.js";
function App() {
  const initialData = {
    cardHolderName: "Hari Bahadur",
    cardNumber: "0000 0000 0000 0000",
    expiryMonth: "MM",
    expiryYear: "YY",
    cvc: "000",
  };
  const [isSubmitted, setIsSubmitted] = React.useState(false); //initially the form is not submitted
  const [card, setCard] = React.useState(initialData); //initialize card
  const [errorList, setErrorList] = React.useState({});

  function handleInputChange(event) {
    //to handle change in form input
    const { name, value } = event.target;
    let newValue = value;
    setCard((prevCard) => {
      if (name === "cardNumber") {
        newValue = formattedCardNumber(value);
      }
      return {
        ...prevCard,
        [name]: newValue,
      };
    });
  }

  function handleMaxInput(event) {
    // for trimming input when max input limit is reached
    event.target.value = event.target.value.slice(0, event.target.maxLength);
  }
  function formattedCardNumber(cardNum) {
    //returns properly formatted card Number
    if (!cardNum) {
      return cardNum;
    }
    const cardNumDigits = cardNum.replace(/[^\d]/g, ""); //stores only the digits
    const cardNumberLength = cardNumDigits.length;
    if (cardNumberLength < 5) return cardNumDigits;
    if (cardNumberLength < 8)
      return `${cardNumDigits.slice(0, 4)} ${cardNumDigits.slice(4)}`;
    if (cardNumberLength < 12)
      return `${cardNumDigits.slice(0, 4)} ${cardNumDigits.slice(
        4,
        8
      )} ${cardNumDigits.slice(8)}`;
    // if (cardNumberLength < 16)
    return `${cardNumDigits.slice(0, 4)} ${cardNumDigits.slice(
      4,
      8
    )} ${cardNumDigits.slice(8, 12)} ${cardNumDigits.slice(12, 16)}`;
  }

  function handleSubmit(event) {
    //when form is submitted
    event.preventDefault();
    const receivedErrors = validateForm(card); //returns the object of errors and sets into errorList state
    // console.log(receivedErrors);
    if (Object.keys(receivedErrors).length) {
      //if errors exist
      // console.log("Errors received!");
      setErrorList(receivedErrors);
    } else {
      //if no errors
      // console.log("Successfully Submitted!");
      setIsSubmitted((prevIsSubmitted) => !prevIsSubmitted);
    }
  }
  function validateForm(inputData) {
    //to check input fields on form submit
    //and return an object containing respective errors
    const errors = {}; //
    //for checking if card holder's name contains a number
    const regExCheckNum = /\d/;
    //getting current date to check if card is already expired
    const date = new Date();
    let currentYear = date.getFullYear().toString();
    currentYear = currentYear[2] + currentYear[3];
    if (
      !inputData.cardHolderName ||
      inputData.cardHolderName === initialData.cardHolderName
    ) {
      //if empty name or default name
      errors.cardHolderName = "Cannot be blank";
    } else if (regExCheckNum.test(inputData.cardHolderName)) {
      //if name exists but contains number
      errors.cardHolderName = "Wrong format, text only";
    }
    if (
      !inputData.cardNumber ||
      inputData.cardNumber === initialData.cardNumber
    ) {
      //if empty card Number or default card number
      errors.cardNumber = "Cannot be blank";
    } else if (inputData.cardNumber.length < 16) {
      errors.cardNumber = "Card number must contain 16 digits";
    }
    if (!inputData.expiryMonth || !inputData.expiryYear) {
      // if expiryMonth or expiryYear are empty
      errors.expiryDate = "Cannot be blank";
    } else if (
      inputData.expiryMonth === initialData.expiryMonth ||
      inputData.expiryYear === initialData.expiryYear
    ) {
      //if expiryMonth or expiryYear are not empty but default
      errors.expiryDate = "Cannot be blank";
    } else if (inputData.expiryMonth < 1 || inputData.expiryMonth > 12) {
      errors.expiryDate = "Months must be between 1 and 12";
    } else if (inputData.expiryYear < currentYear) {
      errors.expiryDate = "Card is already expired";
    }
    if (!inputData.cvc || inputData.cvc === initialData.cvc) {
      //if CVC field is empty or has default value
      errors.cvc = "Cannot be blank";
    }
    // console.log(errors);
    return errors;
  }

  function resetPage() {
    //when 'continue' button is clicked after form submission
    //page is reset
    // console.log("Continue");
    setIsSubmitted((prevIsSubmitted) => !prevIsSubmitted); //toggles submitted status
    setCard(initialData); //clears the form and displays default card
    setErrorList({}); //clears the error list
  }
  return (
    <main className="main flex--col">
      <Hero formData={card} handleInputChange={handleInputChange} />
      {isSubmitted && <ContentAfterSubmit resetPage={resetPage} />}
      {!isSubmitted && (
        <Form
          formData={card}
          errorList={errorList}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          handleMaxInput={handleMaxInput}
        />
      )}
    </main>
  );
}

export default App;
