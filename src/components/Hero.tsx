function Hero() {
  return (
    <div className="hero">
      <div className="hero-copy">
        <p className="hero-status">
          <span />
          probably building something
        </p>

        <h1 className="hero-greeting">
          heyy, i'm Hiral!
        </h1>

        <p className="hero-intro">
          CS + EE student who builds software —
          <br />
          usually after thinking{" "}
          <span>“wait... can i make that?”</span>
        </p>

        <p className="hero-note">
          currently running on curiosity, coffee, and{" "}
          <code>npm run dev</code>
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
            things i've made ↓
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="rain-photo">
          <div className="rain-photo-inner">
            <div className="photo-placeholder">
              <span>portrait_01</span>
              <small>developing...</small>
            </div>
          </div>

          <span className="photo-drop drop-one" />
          <span className="photo-drop drop-two" />
          <span className="photo-drop drop-three" />

          <div className="photo-meta">
            <span>HIRAL_01.JPG</span>
            <span>DAVIS, CA</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span>↓</span>
        keep scrolling
      </div>
    </div>
  );
}

export default Hero;