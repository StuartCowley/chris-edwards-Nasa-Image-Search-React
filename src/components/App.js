import "../styles/app.css";
import SearchBar from "./Search";

function App() {
  return (
    <div className="App">
      <img
        className="logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="Nasa Logo"
      />
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;
