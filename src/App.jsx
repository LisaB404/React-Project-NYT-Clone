import { useState } from 'react'
import "./index.css"
import "./components/Navbar.css"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Article from "./components/Article"
import SearchResults from "./components/SearchResults";
import Footer from './components/Footer'
import SearchBar from './components/Searchbar'

function App() {
  //const [count, setCount] = useState(0)
  const [query, setQuery] = useState(""); // Stato per la ricerca

  const handleSearch = (newQuery) => {
    setQuery(newQuery); // Imposta la nuova query ricevuta dal SearchBar
  };

  return (
    <>
      <Header onSearch={setQuery} />
      <Navbar />
      <Article />
      {query && <SearchResults query={query} />}
      <Footer />
    </>
  )
}

export default App
