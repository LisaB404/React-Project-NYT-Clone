import "./Article.css";
import ArticlePreview from "./ArticlePreview";
import useFetchArticles from "./useFetchArticles";

export default function Article() {
  const { articles, isLoading, error } = useFetchArticles("");

  return (
    <div className="wrapper">
      <div className="articleContainer">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {articles.length === 0 && !isLoading && !error && <p>No article found.</p>}
        {articles.map((article, index) => (
          <ArticlePreview key={index} article={article} />
        ))}
      </div>
    </div>
  );
}
