import React from "react"
import Hero from "./components/Hero";
// import Card from "./components/Card";
import Content from "./components/Content";

function App() {
  return (
    <main className="main flex--col">
      <Hero />
      {/* <Card /> */}
      <Content />
    </main>
  );
}

export default App;
