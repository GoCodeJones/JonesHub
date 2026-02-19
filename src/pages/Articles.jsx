import { featuredArticles } from "../data/articles"
import ArticleCard from "../components/ArticleCard"

export default function Articles() {
  return (
    <section className="section">
      <h1 className="section-title">Artigos</h1>

      <div className="article-grid">
        {featuredArticles.map((a,i)=>(
          <ArticleCard article={a} key={i}/>
        ))}
      </div>
    </section>
  )
}
