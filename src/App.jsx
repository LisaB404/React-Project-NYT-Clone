import { useState } from "react";
import "./index.css";
import "./components/Navbar.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Article from "./components/Article";
import SearchResults from "./components/SearchResults";
import Footer from "./components/Footer";
//import BurgerMenu from "./components/BurgerMenu";
function App() {
  const [query, setQuery] = useState(""); // Stato per la ricerca

  console.log("Query attuale in App prima del render:", query);

  return (
    <>
      <Header
        onSearch={setQuery}
      />
      <Navbar />
      
      {/* Se query è presente, mostra SearchResults, altrimenti mostra Article */}
      {query.trim().length > 0 ? <SearchResults query={query} /> : <Article />}
      
      <Footer />
    </>
  );
}

export default App;
