import "./SectionArticles.css";
import useFetchArticles from "./useFetchArticles";
import ArticlePreview from "./ArticlePreview";

export default function SectionArticles({ section }) {
  const { articles, isLoading, error } = useFetchArticles(section);

  return (
    <>
      <h2>Articles for: {section}</h2>
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