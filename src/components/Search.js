import React, { useState } from "react";
import getImages from "../requests/getImages";
import "../styles/search.css";

const Search = ({ setSearchResults }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    getImages(value).then((images) => setSearchResults(images));
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for images"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Blast off
        </button>
      </form>
    </div>
  );
};

export default Search;
