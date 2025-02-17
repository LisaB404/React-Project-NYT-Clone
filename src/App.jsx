import { useState } from "react";
import "./index.css";
import "./components/Navbar/Navbar.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Article from "./components/Article/Article";
import SearchResults from "./components/SearchResults/SearchResults";
import SectionArticles from "./components/SectionArticles/SectionArticles";
import Footer from "./components/Footer/Footer";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";
import getWindowDimensions from "./hooks/getWindowDimensions";

function App() {
  const { width } = getWindowDimensions();
  const [query, setQuery] = useState("");
  const [selectedSection, setSelectedSection] = useState("");

  const isMobile = width < 768;

  return (
    <>
      <Header onSearch={setQuery} isMobile={isMobile} />

      {isMobile ? (
        <BurgerMenu onSelect={setSelectedSection} onSearch={setQuery} />
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
