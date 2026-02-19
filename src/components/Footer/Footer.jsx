import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">

      <div className="socials">

        <a href="https://github.com/GoCodeJones" className="social github" title="GitHub">
          <svg viewBox="0 0 24 24"><path d="M12 .5C5.7.5.8 5.4.8 11.7c0 5 3.2 9.3 7.6 10.8.6.1.8-.2.8-.6v-2c-3.1.7-3.8-1.5-3.8-1.5-.5-1.2-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 1.6 2.8 1.1.1-.7.4-1.2.7-1.5-2.5-.3-5.2-1.2-5.2-5.6 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 3 .1a10.4 10.4 0 0 1 5.4 0c2.1-.4 3-.1 3-.1.6 1.4.2 2.5.1 2.8.7.8 1.1 1.7 1.1 2.9 0 4.4-2.7 5.3-5.2 5.6.4.3.8 1 .8 2v3c0 .4.2.7.8.6a11.5 11.5 0 0 0 7.6-10.8C23.2 5.4 18.3.5 12 .5z"/></svg>
        </a>

        <a href="https://www.youtube.com/@CanecaJones" className="social youtube" title="YouTube">
          <svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.8zM9.7 15.5v-7l6.3 3.5-6.3 3.5z"/></svg>
        </a>

        <a href="https://x.com/JonesHTML" className="social twitter" title="X">
          <svg viewBox="0 0 24 24"><path d="M18.9 2H22l-6.5 7.4L23 22h-6.8l-5.3-7-6.1 7H2l7-8-7-12h7l4.8 6.4L18.9 2z"/></svg>
        </a>

      </div>

      <p className="footer-text">© JonesHub</p>

    </footer>
  )
}