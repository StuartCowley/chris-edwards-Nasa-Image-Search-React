import React, { useState } from "react";
import SearchBar from "./Search";
import "../styles/app.css";
import SearchResults from "./SearchResults";
import Tags from "./Tags"; // Import the Tags component

function App() {
  const [results, setResults] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = (newResults) => {
    setSearchPerformed(true);
    setResults(newResults);
  };

  return (
    <div className="App">
      <img
        className="logo"
        src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/03/2000px-NASA_Worm_logo.svg.png?auto=format&q=60&fit=max&w=930"
        alt="Nasa Logo"
      />
      <SearchBar setSearchResults={setResults} />
      <Tags setSearchResults={setResults} />
      <SearchResults results={results} />
    </div>
  );
}

export default App;
