import { allVideos } from "../data/allVideos"
import VideoCard from "../components/VideoCard"

export default function Videos() {
  return (
    <section className="section">
        <div className="page-hero">
        <h1>Vídeos</h1>
        <p>Arquivo completo do canal.</p>
        </div>

      <h1 className="section-title">Todos os vídeos</h1>

      <div className="video-grid">
        {allVideos.map((v,i)=>(
          <VideoCard video={v} key={i}/>
        ))}
      </div>
    </section>
  )
}
