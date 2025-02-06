import { useState, useEffect } from "react";
import axios from "axios";
//import ArticlePreview from "./Article";

export default function SearchResults({ query }) {
  const API_KEY = "RZzaPkExJIq3w5Rzp7j6jdy5uS3lVKiH";
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("Query ricevuta:", query); // 🔍 Controlla che la query sia valida
    if (!query || query.trim() === "") return;

    setLoading(true);
    setError(null);

    axios
      .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${API_KEY}`)
      .then((response) => {
        console.log("API results:", response.data); // 🔍 Logga la risposta
        setArticles(response.data.response.docs);
      })
      .catch((err) => {
        console.error("API error:", err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [query]); // Si aggiorna quando cambia la query

  return (
    <div className="wrapper">
      <h2>Search Results for: {query}</h2>
      <div className="articleContainer">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {articles.length === 0 && !loading && !error && <p>No article found.</p>}
        {articles.map((article) => (
          <ArticlePreview key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
}

function ArticlePreview({ article }) {
  const { url, title, abstract, byline, multimedia, section } = article;
  const imageUrl = multimedia?.[0]?.url;

  // Condizione per mostrare l'articolo solo se la sezione è uguale alla query
  if (section && section !== article.section) {
    return null; // Non mostrare l'articolo se la sezione non corrisponde alla query
  }

  return (
    <div className="article">
      <div className="col">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <p className="articleTitle">{title}</p>
        </a>
        <p className="articleAbstract">{abstract}</p>
        <p className="source">{byline}</p>
      </div>
      <div className="col">
        {imageUrl ? (
          <img src={imageUrl} alt={title} className="articleImg" />
        ) : (
          <p>No image found.</p>
        )}
        <p className="source">{multimedia?.[0]?.copyright || "With no copyright"}</p>
      </div>
    </div>
  );
}