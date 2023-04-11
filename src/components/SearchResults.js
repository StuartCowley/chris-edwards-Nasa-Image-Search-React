import React from "react";
import PropTypes from "prop-types";
import Masonry from "react-masonry-css";
import "../styles/searchResults.css";

const SearchResults = ({ results }) => {
  if (!results.length) {
    return <p>No results</p>;
  }

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="masonry-grid"
      columnClassName="masonry-grid_column"
    >
      {results.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt="NASA" className="image" />
      ))}
    </Masonry>
  );
};

SearchResults.propTypes = {
  results: PropTypes.array.isRequired,
};

export default SearchResults;
