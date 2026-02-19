import Layout from "./components/Layout"
import Home from "./pages/Home"
import Videos from "./pages/Videos"
import Articles from "./pages/Articles"
import Contribute from "./pages/Contribute"
import { Routes, Route } from "react-router-dom"
import './styles/theme.css'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/contribute" element={<Contribute />} />
      </Routes>
    </Layout>
  )
}
