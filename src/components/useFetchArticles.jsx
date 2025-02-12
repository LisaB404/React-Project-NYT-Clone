import { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchArticles(query = "") {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    const fetchArticles = async () => {
      try {
        const url =
          query.trim() === ""
            ? `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`
            : `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query.toLowerCase()}&sort=relevance&api-key=${API_KEY}`;

        const response = await axios.get(url);

        if (query.trim() !== "" && response.data?.response?.docs) {
          setArticles(response.data.response.docs);
        } else if (query.trim() === "" && response.data?.results) {
          setArticles(response.data.results);
        } else {
          setArticles([]);
          console.error("Invalid API response format.", response.data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, [query]);

  return { articles, isLoading, error };
}
