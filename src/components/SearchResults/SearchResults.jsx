import "./SearchResults.css";
import ArticlePreview from "../ArticlePreview/ArticlePreview";
import useFetchArticles from "../../hooks/useFetchArticles";

export default function SearchResults({ query }) {
  const { articles, isLoading, error } = useFetchArticles(query);

  return (
    <>
      <h2>Search Results for: {query}</h2>
      <div className="wrapper">
        <div className="articleContainer">
          {isLoading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {articles.length === 0 && !isLoading && !error && (
            <p>No articles found.</p>
          )}
          {articles.map((article, index) => (
            <ArticlePreview key={index} article={article} />
          ))}
        </div>
      </div>
    </>
  );
}
