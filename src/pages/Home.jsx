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

        <div className="social-buttons">
          <a href="#" className="social-btn yt">YouTube</a>
          <a href="#" className="social-btn sub">Substack</a>
          <a href="#" className="social-btn x">X</a>
          <a href="#" className="social-btn discord">Discord</a>
          <a href="#" className="social-btn kick">Kick</a>
        </div>
      </div>

      {/* VIDEOS */}
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

      {/* ARTICLES */}
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

      {/* SUPPORT */}
      <section className="section">
        <h2 className="section-title">Apoie</h2>

        <div className="support-box">
          <p>
            O projeto é independente e financiado pela comunidade.
            Seu apoio mantém os conteúdos ativos e em expansão.
          </p>

          <div className="btc-field">
            <span>₿</span>
            <code>bc1SEUENDERECOAQUI</code>
          </div>

          <a href="#" className="discord-btn">
            Entrar no Discord
          </a>
        </div>
      </section>
    </div>
  );
}
