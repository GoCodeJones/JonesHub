import { videos } from "../data/videos"
import VideoCard from "../components/VideoCard"

export default function Videos() {
  return (
    <section className="section">

      <div className="page-hero">
        <h1>Vídeos</h1>
        <p>Arquivo completo do canal.</p>
      </div>

      <div className="video-grid">
        {videos.map((v,i)=>(
          <VideoCard video={v} key={i}/>
        ))}
      </div>

    </section>
  )
}
