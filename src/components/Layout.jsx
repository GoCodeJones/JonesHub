import "../styles/theme.css"
import Navbar from "./Navbar"
import Footer from "./Footer"


export default function Layout({ children }) {
  return (
    <div className="app">
      <Navbar />
      <main className="content">
        {children}
      </main>
      <Footer />
    </div>
  )
}
