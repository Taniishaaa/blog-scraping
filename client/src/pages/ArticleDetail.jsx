import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const API_URL = "https://blog-scraping-nkrc.onrender.com/articles";

export default function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data));
  }, [id]);

  if (!article) {
    return <p style={{ padding: "20px" }}>Loading...</p>;
  }

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        ← Back to Articles
      </Link>

      <h1 style={{ marginTop: "10px" }}>{article.title}</h1>

      {/* Side-by-side layout */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          marginTop: "30px",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {/* Original Article */}
        <div
          style={{
            flex: "1",
            minWidth: "300px",
            border: "1px solid #ddd",
            padding: "20px",
            borderRadius: "8px",
          }}
        >
          <h2>Original Article</h2>
          <p style={{ whiteSpace: "pre-line", lineHeight: "1.6" }}>
            {article.originalContent}
          </p>
        </div>

        {/* Updated Article */}
        {article.updatedContent && (
          <div
            style={{
              flex: "1",
              minWidth: "300px",
              border: "1px solid #ddd",
              padding: "20px",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h2>Updated Article</h2>
            <p style={{ whiteSpace: "pre-line", lineHeight: "1.6" }}>
              {article.updatedContent}
            </p>
          </div>
        )}
      </div>

      {/* References */}
      {article.references?.length > 0 && (
        <div style={{ marginTop: "30px" }}>
          <h3>References</h3>
          <ul>
            {article.references.map((ref, i) => (
              <li key={i}>
                <a href={ref} target="_blank" rel="noreferrer">
                  {ref}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
