function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-status">
          <span />
          probably tinkering with some code 
        </p>

        <h1>
          <span className="hero-hello">heyy, i'm Hiral!</span>
          <br />
          i build software +
          <br />
          <em>intelligent systems.</em>
        </h1>

        <p className="hero-description">
          Computer Science + Electrical Engineering @ UC Davis
          I like building software, experimenting with machine learning, 
          and sometimes connecting way too many wires to an Arduino.
        </p>

        <div className="hero-links">
          <a
            href="https://github.com/hir-al-14"
            target="_blank"
            rel="noreferrer"
          >
            github ↗
          </a>

          <a
            href="https://www.linkedin.com/in/hiral-aroraa/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin ↗
          </a>

          <a href="#projects">
            stuff i've built ↓
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="photo-frame">
          <div className="photo-placeholder">
            photo incoming :)
          </div>

          <span className="photo-corner corner-tl" />
          <span className="photo-corner corner-tr" />
          <span className="photo-corner corner-bl" />
          <span className="photo-corner corner-br" />

          <div className="photo-meta">
            <span>HIRAL_01.JPG</span>
            <span>DAVIS, CA</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;