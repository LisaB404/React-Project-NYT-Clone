import "./ArticlePreview.css";

export default function ArticlePreview({ article, index }) {
  if (!article) {
    return <p>No article found.</p>;
  }

  // Determina se l'articolo proviene dai risultati di ricerca
  const isSearchResult = article.headline !== undefined;

  // Per il titolo: usa article.title oppure article.headline.main se non presente title
  const articleTitle = article.title || (article.headline && article.headline.main) || "No title available";
  
  // Per l'abstract: se non è disponibile, puoi usare snippet (se presente)
  const articleAbstract = article.abstract || article.snippet || "No abstract available";

  // Per il byline: se è un oggetto, usa la proprietà "original"
  let articleByline = "Unknown Author";
  if (article.byline) {
    if (typeof article.byline === "object") {
      articleByline = article.byline.original || "Unknown Author";
    } else {
      articleByline = article.byline;
    }
  }

  // Per l'immagine: controlla se esiste un'immagine e, se necessario, completa l'URL
  let imageUrl = "";
  if (article.multimedia && article.multimedia.length > 0) {
    if (isSearchResult) {
      // Nell'API di ricerca, l'URL potrebbe essere relativo
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
