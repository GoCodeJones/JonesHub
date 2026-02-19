import "./ArticleCard.css"

export default function ArticleCard({ article }) {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="article-card"
    >
      <h3>{article.title}</h3>
      <p>{article.description}</p>
    </a>
  )
}