import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
        </Link>
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