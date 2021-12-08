import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Carroussel from "./components/Carroussel";

const App = () => {
  console.log("test");
  return (
    <div className="mainPage">
      <Header />
      HELLO
      <Hero />
      <Carroussel />
    </div>
  );
};

export default App;
