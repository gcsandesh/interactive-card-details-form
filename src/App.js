import React from "react";
import Hero from "./components/Hero";
import Form from "./components/Form";
import ContentAfterSubmit from "./components/ContentAfterSubmit.js";
function App() {
  const initialCard = {
    cardHolderName: "Hari Bahadur",
    cardNumber: "0000 0000 0000 0000",
    expiryMonth: "MM",
    expiryYear: "YY",
    cvc: "000",
  };
  const [isSubmitted, setIsSubmitted] = React.useState(false); //initially the form is not submitted
  const [card, setCard] = React.useState(initialCard); //initialize card
  // const [isValidForm, setIsValidForm] = React.useState(false);
  //to handle change in form input
  function handleInputChange(event) {
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

  // for trimming input when max input limit is reached
  function handleMaxInput(event) {
    event.target.value = event.target.value.slice(0, event.target.maxLength);
  }
  //returns properly formatted card Number
  function formattedCardNumber(cardNum) {
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
  } //end of function

  //when form is submitted
  function handleSubmit(event) {
    event.preventDefault();
    // checkForm(); //check for errors in form inputs
    //submits the form if it is valid
    //displays the errors if the form is not valid
    // if (isValidForm) {
      setIsSubmitted((prevIsSubmitted) => !prevIsSubmitted);
      console.log("Successfully Submitted!");
    // } else {
      // console.log("Form Invalid"); //toggles submitted status
    // }
  }
  //to check input fields on form submit
  // function checkForm(element) {
    // element.classList.toggle("invalid");
    // setIsValidForm(true);

    // should know which form element has an error
    // if "variable" has an error classlist.add("invalid") to that Form Element
    //  element.value === "" ? element.classList.toggle("invalid")
    //   const { cardHolderName, cardNumber, expiryMonth, expiryYear, cvc } = card;
  // }

  //when continue button is clicked after form submission
  //page is reset
  function resetPage() {
    console.log("continue");
    setIsSubmitted((prevIsSubmitted) => !prevIsSubmitted); //toggles submitted status
    resetCard(); //resets the card
  }

  //resets the card
  function resetCard() {
    setCard(initialCard);
  }
  return (
    <main className="main flex--col">
      <Hero formData={card} handleInputChange={handleInputChange} />
      {isSubmitted && <ContentAfterSubmit resetPage={resetPage} />}
      {!isSubmitted && (
        <Form
          formData={card}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          handleMaxInput={handleMaxInput}
        />
      )}
    </main>
  );
}

export default App;
