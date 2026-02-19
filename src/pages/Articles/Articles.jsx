import { featuredArticles } from "../../data/articles"
import ArticleCard from "../../components/ArticleCard/ArticleCard"
import "./Articles.css"

export default function Articles() {
  return (
    <section className="articles-page">

      <div className="articles-hero">
        <h1>Artigos</h1>
        <p>Textos, análises e ensaios.</p>
      </div>

      <div className="articles-grid">
        {featuredArticles.map((a, i) => (
          <ArticleCard article={a} key={i} />
        ))}
      </div>

    </section>
  )
}