import profile from "../assets/jones.jpg";
import { featuredVideos } from "../data/videos";
import { featuredArticles } from "../data/articles";
import VideoCard from "../components/VideoCard";
import ArticleCard from "../components/ArticleCard";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home">

      {/* HERO / CAPA */}
      <section className="hero">
        <img src={profile} alt="profile" className="hero-avatar" />

        <h1 className="hero-title">JonesHub</h1>

        <p className="hero-tagline">
          Hub centralizado para melhor acesso.
        </p>

        <p className="hero-description">
          Análises históricas, filosofia política e tecnologia sob uma perspectiva crítica.
        </p>

        <blockquote className="hero-quote">
          “Não há nada mais burro que achar que você foi o único a ter uma boa ideia.”
          <span>— Sócrates, provavelmente depois de beber</span>
        </blockquote>

        <div className="social-buttons">
          <a href="https://www.youtube.com/@CanecaJones" className="social-btn yt">YouTube</a>
          <a href="https://substack.com/@jhonatangeronimo" className="social-btn sub">Substack</a>
          <a href="https://x.com/JonesHTML" className="social-btn x">X</a>
          <a href="https://discord.gg/mQsy9EkdqY" className="social-btn discord">Discord</a>
          <a href="https://kick.com/canecajones" className="social-btn kick">Kick</a>
        </div>
      </section>

      <div className="divider" />

      {/* DESTAQUES */}
      <section className="highlight">
        <h2>Destaques</h2>
        <p>
          Conteúdos essenciais para entender o projeto e a linha de pensamento do canal.
        </p>
      </section>

      {/* VIDEOS */}
      <section className="section">
        <div className="section-header">
          <h2>Principais vídeos</h2>
          <Link to="/videos">Arquivo completo →</Link>
        </div>

        <div className="video-grid">
          {featuredVideos.map((v, i) => (
            <VideoCard video={v} key={i} />
          ))}
        </div>
      </section>

      {/* ARTICLES */}
      <section className="section">
        <div className="section-header">
          <h2>Principais artigos</h2>
          <Link to="/articles">Ler todos →</Link>
        </div>

        <div className="article-grid">
          {featuredArticles.map((a, i) => (
            <ArticleCard article={a} key={i} />
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* COMMUNITY / SUPPORT */}
      <section className="support">
        <div className="support-left">
          <h2>Apoie o projeto</h2>

          <p>
            O projeto é independente e financiado diretamente pela comunidade.
            Sua contribuição mantém o conteúdo livre, frequente e sem patrocinadores.
          </p>

          <div className="btc-box">
            <span className="btc-icon">₿</span>
            <code>bc1SEUENDERECOAQUI</code>
          </div>

          <a href="https://discord.gg/mQsy9EkdqY" className="discord-btn">
            Entrar na comunidade
          </a>
        </div>

        <div className="support-right">
          <p>
            Discussões, ideias, bastidores e sugestões acontecem dentro do servidor.
            O site é o arquivo — a comunidade é onde o projeto vive.
          </p>
        </div>
      </section>

    </div>
  );
}
