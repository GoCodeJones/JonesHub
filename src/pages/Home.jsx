import profile from "../assets/jones.jpg";
import { featuredVideos } from "../data/videos";
import VideoCard from "../components/VideoCard";
import ArticleCard from "../components/ArticleCard";
import { featuredArticles } from "../data/articles";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="profile">
        <img src={profile} alt="profile" className="profile-img" />

        <h1 className="title">JonesHub</h1>

        <p className="subtitle">
          Meu hub central de conteúdos, vídeos, artigos e comunidade.
        </p>

        <div className="buttons">
          <a href="#" className="btn youtube">
            <svg viewBox="0 0 24 24" className="icon">
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.8zM9.7 15.5v-7l6.3 3.5-6.3 3.5z" />
            </svg>
            YouTube
          </a>
          <a href="#" className="btn substack">
            <svg viewBox="0 0 24 24" className="icon">
              <path d="M4 3h16v3H4zm0 5h16v3H4zm0 5h16v8l-8-4-8 4z" />
            </svg>
            Substack
          </a>
        </div>
      </div>

      <section className="section">
        <h2 className="section-title">Principais vídeos</h2>

        <div className="video-grid">
          {featuredVideos.map((v, i) => (
            <VideoCard video={v} key={i} />
          ))}
        </div>

        <Link to="/videos" className="see-more">
          Ver mais vídeos
        </Link>
      </section>

      <section className="section">
        <h2 className="section-title">Principais artigos</h2>

        <div className="article-grid">
          {featuredArticles.map((a, i) => (
            <ArticleCard article={a} key={i} />
          ))}
        </div>

        <Link to="/articles" className="see-more">
          Ver mais artigos
        </Link>
      </section>

      <section className="section">
        <h2 className="section-title">Contribuição</h2>

        <div className="contribute-preview">
          <p>Apoie o projeto e participe da comunidade.</p>

          <Link to="/contribute" className="btn outline">
            Saiba mais
          </Link>
        </div>
      </section>
    </div>
  );
}
