import "./Article.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Article() {
  const [articles, setArticles] = useState([]);
  const API_KEY = "RZzaPkExJIq3w5Rzp7j6jdy5uS3lVKiH";

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`
        );

        if (response.data && response.data.results) {
          setArticles(response.data.results);
        } else {
          console.error("Invalid API response format.", response.data);
          setArticles([]);
        }
      } catch (error) {
        console.error("Error in the news load:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="wrapper">
      <div className="articleContainer">
        {articles.length === 0 ? (
          <p>No article found.</p>
        ) : (
          articles.map((article, index) => (
            <ArticlePreview key={index} article={article} index={index} />
          ))
        )}
      </div>
    </div>
  );
}

function ArticlePreview({ article, index }) {
  if (!article) {
    return <p>No article found.</p>;
  }

  const { url, title, abstract, byline, multimedia, section } = article;
  const imageUrl = multimedia?.[0]?.url;

  // Condizione per mostrare l'articolo solo se la sezione è uguale alla query
  if (section && section !== article.section) {
    return null; // Non mostrare l'articolo se la sezione non corrisponde alla query
  }
  
  return (
    <div key={index} className="article">
      <div className="col">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <p className="articleTitle">{title}</p>
        </a>
        <p className="articleAbstract">{abstract}</p>
        <p className="source">{byline}</p>
      </div>
      <div className="col">
        {imageUrl && <img src={imageUrl} alt={title} className="articleImg" /> || "No image found."}
        <p className="source">{multimedia?.[0]?.copyright || "With no copyright"}</p>
      </div>
    </div>
  );
}