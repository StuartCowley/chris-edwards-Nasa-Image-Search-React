import React from "react";
import "../styles/searchResults.css";

function SearchResults({ results }) {
  if (!results.length) {
    return <p>No results</p>;
  }

  return (
    <div className="image-gallery">
      {results.map((result) => (
        <img
          src="https://via.placeholder.com/150"
          alt="placeholder"
          key={result.id}
        />
      ))}
    </div>
  );
}

export default SearchResults;
