import { useEffect, useState } from "react";
import { getArticlePreview } from "../utils/extract";

export default function ArticleCard({ article }) {
  const [preview, setPreview] = useState({ image: "", description: "" });

  useEffect(() => {
    getArticlePreview(article.url).then(setPreview);
  }, [article.url]);

  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card article-card"
    >
      {preview.image && <img src={preview.image} className="thumb" />}

      <div className="card-content">
        <h3>{article.title}</h3>
        <p>{preview.description || "Abrir artigo completo"}</p>
      </div>
    </a>
  );
}
