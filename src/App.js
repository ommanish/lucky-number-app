import React, { useState } from "react";
import InputForm from "./components/InputForm";
import logo from "./assets/logo_new.png"; // Adjust the path as necessary

import "./App.css";
import {
  calculateLifePathNumber,
  generateLuckyNumbers,
  generateSpecialLuckyNumber,
  calculateCombinedNumber,
} from "./utils//utils/numerology";

function App() {
  const [results, setResults] = useState(null);

  const handleFormSubmit = (formData) => {
    const lifePathNumber = calculateLifePathNumber(formData.birthDate);
    const luckyNumbers = generateLuckyNumbers();
    const specialNumber = generateSpecialLuckyNumber();
    const combinedNumber = calculateCombinedNumber(
      formData.birthDate,
      formData.birthTime,
      formData.specificDate,
      formData.specificTime
    );

    setResults({ lifePathNumber, luckyNumbers, specialNumber, combinedNumber });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" className="App-logo" />
      </header>
      <InputForm onFormSubmit={handleFormSubmit} />

      {results && (
        <div className="results">
          <h2>Results:</h2>
          <p>Life Path Number: {results.lifePathNumber}</p>
          <p>Lucky Numbers: {results.luckyNumbers.join(", ")}</p>
          <p>Special Number: {results.specialNumber}</p>
          <p>Combined Number: {results.combinedNumber}</p>
        </div>
      )}
    </div>
  );
}

export default App;
