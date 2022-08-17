import React from "react";
import Hero from "./components/Hero";
import Content from "./components/Content";

function App() {
  const [cardDetails, setCardDetails] = React.useState({
    cardHolderName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvc: "",
  });
  //to handle change in form input
  function handleInputChange(event) {
    console.log(event.target.value);
    setCardDetails((prevCardDetails) => {
      const { name, value } = event.target;
      return {
        ...prevCardDetails,
        [name]: value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Successfully Submitted!");
  }

  return (
    <main className="main flex--col">
      <Hero formData={cardDetails} handleInputChange={handleInputChange} />
      <Content
        formData={cardDetails}
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
    </main>
  );
}

export default App;
