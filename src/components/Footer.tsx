export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="footer-note">
          <div className="footer-coffee" role="img" aria-label="A warm cup of coffee with a heart"><span className="coffee-steam">∿ ∿ ∿</span><span className="coffee-cup">♡</span><span className="coffee-saucer" /></div>
          <p>one more coffee, one more idea.</p>
          <h2>let’s make something lovely.</h2>
          <a className="footer-email" href="mailto:hiral.arora.1418@gmail.com">hiral.arora.1418@gmail.com <span aria-hidden="true">↗</span></a>
        </div>
        <nav className="footer-links" aria-label="Contact links">
          <a href="https://github.com/hir-al-14" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/hiral-aroraa/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="#about">A little about me</a>
        </nav>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Hiral Arora · Davis, CA</span><span>made with curiosity &amp; a little caffeine ♡</span><a href="#top">back to top ↑</a></div>
      </div>
    </footer>
  );
}
