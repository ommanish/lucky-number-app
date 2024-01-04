import React, { useState } from "react";

function InputForm({ onFormSubmit }) {
  const [birthDate, setBirthDate] = useState("");
  const [birthTime, setBirthTime] = useState("");
  const [name, setName] = useState("");
  const [specificDate, setSpecificDate] = useState("");
  const [specificTime, setSpecificTime] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onFormSubmit({ birthDate, birthTime, name, specificDate, specificTime });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="birthDate">Birth Date:</label>
        <input
          type="date"
          id="birthDate"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="birthTime">Birth Time:</label>
        <input
          type="time"
          id="birthTime"
          value={birthTime}
          onChange={(e) => setBirthTime(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="name">Name (optional):</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="specificDate">Specific Date:</label>
        <input
          type="date"
          id="specificDate"
          value={specificDate}
          onChange={(e) => setSpecificDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="specificTime">Specific Time:</label>
        <input
          type="time"
          id="specificTime"
          value={specificTime}
          onChange={(e) => setSpecificTime(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default InputForm;
