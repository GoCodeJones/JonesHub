import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo-placeholder">LOGO</div>
      </div>

      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/videos">Vídeos</Link>
        <Link to="/articles">Artigos</Link>
        <Link to="/contribute">Contribuir</Link>
      </div>
    </nav>
  )
}
