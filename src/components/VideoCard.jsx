import { getYoutubeThumb } from "../utils/extract";

export default function VideoCard({ video }) {
  const thumb = getYoutubeThumb(video.url);

  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      className="card video-card"
    >
      <img
        src={thumb}
        alt={video.title}
        className="thumb"
        onError={(e) =>
          (e.target.src = thumb.replace("maxresdefault", "hqdefault"))
        }
      />

      <div className="card-content">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </div>
    </a>
  );
}
