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
  const { width } = getWindowDimensions();
  const [query, setQuery] = useState("");
  const [selectedSection, setSelectedSection] = useState("");

    const isMobile = width < 768;

  return (
    <>
      <Header
        onSearch={setQuery}
        isMobile={isMobile}
      />

      {isMobile ? (
        <BurgerMenu onSelect={setSelectedSection} onSearch={setQuery}/>
      ) : (
        <Navbar onSectionSelect={setSelectedSection} />
      )}
      
      {/* if there is a query display SearchResults; 
          is a section is selected display that section; 
          otherwise show Article */}
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
