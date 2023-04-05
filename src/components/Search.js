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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          onChange={handleInputChange}
          value={inputValue}
        />
        <button className="search-button" type="submit">
          Blast off
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
