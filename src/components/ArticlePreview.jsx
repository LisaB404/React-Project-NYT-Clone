import "./ArticlePreview.css";

export default function ArticlePreview({ article, index }) {
  if (!article) {
    return <p>No article found.</p>;
  }

  const isSearchResult = article.headline !== undefined;

  const articleTitle = article.title || (article.headline && article.headline.main) || "No title available";
  
  const articleAbstract = article.abstract || article.snippet || "No abstract available";

  let articleByline = "Unknown Author";
  if (article.byline) {
    if (typeof article.byline === "object") {
      articleByline = article.byline.original || "Unknown Author";
    } else {
      articleByline = article.byline;
    }
  }

  let imageUrl = "";
  if (article.multimedia && article.multimedia.length > 0) {
    if (isSearchResult) {
      imageUrl = article.multimedia[0].url
        ? `https://www.nytimes.com/${article.multimedia[0].url}`
        : "";
    } else {
      imageUrl = article.multimedia[0].url;
    }
  }

  return (
    <div className="article" key={index}>
      <div className="col">
        <a href={article.web_url} target="_blank" rel="noopener noreferrer">
          <p className="articleTitle">{articleTitle}</p>
        </a>
        <p className="articleAbstract">{articleAbstract}</p>
        <p className="source">{articleByline}</p>
      </div>
      <div className="col">
        {imageUrl && (
          <img
            src={imageUrl}
            alt={article.multimedia?.[0]?.caption || "Article image"}
            className="articleImg"
          />
        )}
        <p className="source">
          {article.multimedia?.[0]?.copyright || "With no copyright"}
        </p>
      </div>
    </div>
  );
}
