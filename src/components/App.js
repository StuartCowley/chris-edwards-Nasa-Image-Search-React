import React, { useState } from "react";
import SearchBar from "./Search";
import "../styles/app.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <img
        className="logo"
        src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/03/2000px-NASA_Worm_logo.svg.png?auto=format&q=60&fit=max&w=930"
        alt="Nasa Logo"
      />
      <SearchBar setSearchResults={setSearchResults} />
      {console.log(searchResults)}
    </div>
  );
}

export default App;
