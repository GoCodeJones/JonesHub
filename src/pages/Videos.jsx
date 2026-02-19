import { allVideos } from "../data/allVideos"
import VideoCard from "../components/VideoCard"

export default function Videos() {
  return (
    <section className="section">
      <h1 className="section-title">Todos os vídeos</h1>

      <div className="video-grid">
        {allVideos.map((v,i)=>(
          <VideoCard video={v} key={i}/>
        ))}
      </div>
    </section>
  )
}
