export default function VideoCard({ video }) {
  return (
    <a href={video.url} target="_blank" className="video-card">
      <img src={video.thumb} className="video-thumb"/>
      <div className="video-info">
        <p>{video.title}</p>
      </div>
    </a>
  )
}
