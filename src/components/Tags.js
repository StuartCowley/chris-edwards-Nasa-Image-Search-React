import React from "react";
import "../styles/tags.css";
import getImages from "../requests/getImages";

const Tags = ({ setSearchResults }) => {
  const popularTags = [
    "sun",
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
    <>
      <p>Popular searches</p>
      <div className="tags-container">
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
    </>
  );
};

export default Tags;
