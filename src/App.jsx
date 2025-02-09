import { useState } from "react";
import "./index.css";
import "./components/Navbar.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Article from "./components/Article";
import SearchResults from "./components/SearchResults";
import SectionArticles from "./components/SectionArticles";
import Footer from "./components/Footer";
//import BurgerMenu from "./components/BurgerMenu";

function App() {
  const [query, setQuery] = useState(""); // Stato per la ricerca
  const [selectedSection, setSelectedSection] = useState(""); // Stato per la sezione selezionata

  console.log("Query attuale in App prima del render:", query);

  return (
    <>
      <Header
        onSearch={setQuery}
      />
      <Navbar onSectionSelect={setSelectedSection} />
      
      {/* Se è stata inserita una query, mostra SearchResults; 
          altrimenti, se è stata selezionata una sezione, mostra gli articoli per quella sezione; 
          altrimenti mostra Article (es. top stories) */}
          {query.trim().length > 0 ? (
        <SearchResults query={query} />
      ) : selectedSection.trim().length > 0 ? (
        <SectionArticles section={selectedSection} />
      ) : (
        <Article />
      )}
      
      <Footer />
    </>
  );
}

export default App;
