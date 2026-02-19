import { videos } from "../../data/videos"
import VideoCard from "../../components/VideoCard/VideoCard"
import "./Videos.css"

export default function Videos() {
  return (
    <section className="videos-page">

      <div className="videos-hero">
        <h1>Vídeos</h1>
        <p>Arquivo completo do canal.</p>
      </div>

      <div className="videos-grid">
        {videos.map((v, i) => (
          <VideoCard video={v} key={i} />
        ))}
      </div>

    </section>
  )
}