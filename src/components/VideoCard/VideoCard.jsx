import { getYoutubeThumb } from "../../utils/extract"
import "./VideoCard.css"

export default function VideoCard({ video }) {
  const thumb = getYoutubeThumb(video.url)

  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="video-card"
    >
      <img
        src={thumb}
        alt={video.title}
        className="video-thumb"
        onError={(e) => (e.target.src = thumb.replace("maxresdefault", "hqdefault"))}
      />

      <div className="video-info">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </div>
    </a>
  )
}