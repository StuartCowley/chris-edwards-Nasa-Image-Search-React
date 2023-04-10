import "../styles/app.css";
import SearchBar from "./Search";

function App() {
  return (
    <div className="App">
      <img
        className="logo"
        src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2019/03/2000px-NASA_Worm_logo.svg.png?auto=format&q=60&fit=max&w=930"
        alt="Nasa Logo"
      />
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;
