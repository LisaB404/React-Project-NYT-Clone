import { useState } from "react";
import "./index.css";
import "./components/Navbar.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Article from "./components/Article";
import SearchResults from "./components/SearchResults";
import SectionArticles from "./components/SectionArticles";
import Footer from "./components/Footer";
import BurgerMenu from "./components/burgerMenu";
import getWindowDimensions from "./components/getWindowDimensions";

function App() {
  const { width } = getWindowDimensions(); // Ottieni la larghezza della finestra
  const [query, setQuery] = useState(""); // Stato per la ricerca
  const [selectedSection, setSelectedSection] = useState(""); // Stato per la sezione selezionata

    // Definisci il breakpoint: sotto 768px consideriamo un dispositivo mobile
    const isMobile = width < 768;

  return (
    <>
      <Header
        onSearch={setQuery}
        isMobile={isMobile}
      />

      {/* Mostra BurgerMenu su mobile, altrimenti Navbar */}
      {isMobile ? (
        <BurgerMenu onSelect={setSelectedSection} onSearch={setQuery}/>
      ) : (
        <Navbar onSectionSelect={setSelectedSection} />
      )}
      
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
