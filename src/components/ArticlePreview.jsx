import "./ArticlePreview.css";

export default function ArticlePreview({ article, index }) {
    console.log("Rendering ArticlePreview con articolo:", article);
    if (!article) {
      return <p>No article found.</p>;
    }
  
    const { web_url, title, abstract, byline, multimedia } = article;
    const imageUrl = multimedia?.[0]?.url;
    console.log("Rendering Home Page (ArticlePreview.jsx)");
    return (
      <div key={index} className="article">
        <div className="col">
          <a href={web_url} target="_blank" rel="noopener noreferrer">
            <p className="articleTitle">{title}</p>
          </a>
          <p className="articleAbstract">{abstract}</p>
          <p className="source">{byline || "Unknown Author"}</p>
        </div>
        <div className="col">
          {imageUrl && <img src={imageUrl} alt={multimedia?.[0]?.caption} className="articleImg" />}
          <p className="source">{multimedia?.[0]?.copyright || "With no copyright"}</p>
        </div>
      </div>
    );
  }
  