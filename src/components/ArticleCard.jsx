export default function ArticleCard({ article }) {
  return (
    <a href={article.url} target="_blank" className="article-card">
      <div className="article-content">
        <h3>{article.title}</h3>
        <p>{article.description}</p>
      </div>
    </a>
  )
}
