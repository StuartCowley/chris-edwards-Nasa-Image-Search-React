import React from "react";
import "../styles/tags.css";
import getImages from "../requests/getImages";

const Tags = ({ setSearchResults }) => {
  const popularTags = [
    "earth",
    "mars",
    "moon",
    "galaxy",
    "space",
    "stars",
    "nebula",
    "saturn",
  ];

  const handleTagClick = async (tag) => {
    setSearchResults(await getImages(tag));
  };

  return (
    <div className="tags-container">
      <p>Popular Searches:</p>
      {popularTags.map((tag) => (
        <button
          key={tag}
          className="tag-button"
          onClick={() => handleTagClick(tag)}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default Tags;
