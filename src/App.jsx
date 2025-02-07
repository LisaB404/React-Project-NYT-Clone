import { useState } from 'react'
import "./index.css"
import "./components/Navbar.css"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Article from "./components/Article"
import SearchResults from "./components/SearchResults";
import Footer from './components/Footer'

function App() {
  const [query, setQuery] = useState(""); // Stato per la ricerca

   /* const handleSearch = (searchQuery) => {
    setQuery(searchQuery); // Imposta la nuova query ricevuta dal SearchBar
  };  */

  return (
    <> 
      <Header onSearch={setQuery} /> {/* Passiamo la funzione di ricerca al Header */}
      <Navbar />
      {query ? <SearchResults query={query} /> : <Article />} {/* Mostra risultati se c'è una ricerca */}
      <Footer />
    </>
  )
}

export default App
