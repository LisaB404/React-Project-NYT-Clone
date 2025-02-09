import "./Article.css";
import { useState, useEffect } from "react";
import axios from "axios";
import ArticlePreview from "./ArticlePreview";

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
          setArticles(() => response.data.results);
        } else {
          console.error("Invalid API response format.", response.data);
          setArticles(() => []);
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
