import { useState, useEffect } from "react";
import axios from "axios";
import ArticlePreview from "./Article";
import "./SearchResults.css";

export default function SearchResults({ query }) {
  const API_KEY = "RZzaPkExJIq3w5Rzp7j6jdy5uS3lVKiH";
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query.trim()) {
      setArticles([]);
      return; // Non fare chiamate API se la query è vuota o contiene solo spazi
    }

    setLoading(true);
    setError(null);

    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&sort=relevance&api-key=${API_KEY}`;
    console.log("Chiamata API:", url);

    axios.get(url)
      .then((response) => {
        if (response.data.response.docs.length > 0) {
          console.log("Risultati API:", response.data.response.docs);
          setArticles(response.data.response.docs);
        } else {
          setArticles([]); // Nessun risultato trovato
        }
      })
      .catch((err) => {
        console.error("Errore API:", err);
        setError("Error loading articles.");
      })
      .finally(() => setLoading(false));
  }, [query]); //quando query cambia, rifare ricerca

  return (
    <>
    <h2>Search Results for: {query}</h2>
    <div className="wrapper">
      <div className="articleContainer">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {articles.length === 0 && !loading && !error && <p>No articles found.</p>}
        {articles.length > 0 && articles.map((article) => (
          <ArticlePreview key={article._id} article={article} />
        ))}
      </div>
    </div>
    </>
  );
}
