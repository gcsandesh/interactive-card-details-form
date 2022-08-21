import React from "react";
import Hero from "./components/Hero";
import Form from "./components/Form";
import ContentAfterSubmit from "./components/ContentAfterSubmit.js";
function App() {
  const [isSubmitted, setIsSubmitted] = React.useState(false); //initially the form is not submitted
  const [cardDetails, setCardDetails] = React.useState({
    cardHolderName: "Hari Bahadur",
    cardNumber: "0000 0000 0000 0000",
    expiryMonth: "MM",
    expiryYear: "YY",
    cvc: "000",
  });
  //to handle change in form input
  function handleInputChange(event) {
    const { name, value } = event.target;
    // console.log(name);
    // console.log(maxLength)
    // let newValue = value.slice(0, maxLength);
    let newValue = value;
    setCardDetails((prevCardDetails) => {
      if (name === "cardNumber") {
        newValue = formattedCardNumber(value);
        // console.log("after formatting",newValue)
      }
      return {
        ...prevCardDetails,
        [name]: newValue,
      };
    })}

    // for trimming input when max input limit is reached
    function handleMaxInput(event) {
      event.target.value = event.target.value.slice(0, event.target.maxLength)
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
    }//end of function
  
  //when form is submitted
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Successfully Submitted!");
    toggleIsSubmitted();
  }
  //when continue button is clicked after form submission
  function handleContinue(event) {
    console.log("continue");
    toggleIsSubmitted();
  }
  function toggleIsSubmitted() {
    setIsSubmitted((prevIsSubmitted) => !prevIsSubmitted);
  }

  return (
    <main className="main flex--col">
      <Hero formData={cardDetails} handleInputChange={handleInputChange} />
      {isSubmitted && <ContentAfterSubmit handleContinue={handleContinue} />}
      {!isSubmitted && (
        <Form
          formData={cardDetails}
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          handleMaxInput={handleMaxInput}
        />
      )}
    </main>
  );
}

export default App;
