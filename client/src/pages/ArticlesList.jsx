import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "http://localhost:5000/articles";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>BeyondChats Articles</h1>

      {articles.map((article) => (
        <div
          key={article._id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "6px",
          }}
        >
          <h3>{article.title}</h3>
          <Link to={`/article/${article._id}`}>View Article</Link>
        </div>
      ))}
    </div>
  );
}
