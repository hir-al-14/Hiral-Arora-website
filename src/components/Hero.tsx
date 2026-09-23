function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-status">
          <span />
          currently building
        </p>

        <h1>
          <span className="hero-hello">heyy, i'm Hiral!</span>
          <br />
          i build software +
          <br />
          <em>intelligent systems.</em>
        </h1>

        <p className="hero-description">
          CS + EE @ UC Davis, exploring the space between
          software engineering, machine learning, and things
          I probably decided to build at 2am.
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
            projects ↓
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