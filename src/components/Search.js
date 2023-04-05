import React, { useState } from "react";
import "../styles/search.css";

function SearchBar({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleInputChange}
        value={inputValue}
      />
      <button className="search-button" type="submit" onClick={handleSubmit}>
        Blast off!
      </button>
    </div>
  );
}

export default SearchBar;
