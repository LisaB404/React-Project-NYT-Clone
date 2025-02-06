import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";

export default function SearchBar({ onSearch }) {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query); // Passa la query al componente genitore quando si preme "GO"
    }
  };

  return (
    <div className="searchContainer">
      <button className="searchIcon" onClick={() => setShowSearch(!showSearch)}>
        <FontAwesomeIcon icon={faSearch} />
      </button>

      {showSearch && (
        <div className="searchBox">
          <input
            type="text"
            placeholder="SEARCH"
            className="searchInput"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="searchBtn" onClick={handleSearch}>GO</button>
        </div>
      )}
    </div>
  );
}