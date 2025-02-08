/* import { useEffect, useState } from "react";

export default function NewsSection({ section }) {
  const [articles, setArticles] = useState([]);
  const API_KEY = "LA_TUA_API_KEY"; // Sostituiscila con la tua API Key del NYT

  useEffect(() => {
    if (!section) return;

    const fetchArticles = async () => {
      try {
        const response = await fetch(
          `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY}`
        );
        const data = await response.json();
        setArticles(data.results || []);
      } catch (error) {
        console.error("Errore nel recupero degli articoli:", error);
      }
    };

    fetchArticles();
  }, [section]);

  return (
    <div className="newsSection">
      <h2>{section.toUpperCase()} News</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.url}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
 */