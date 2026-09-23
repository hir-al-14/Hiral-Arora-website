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
            github
            <span
              className="external-arrow"
              aria-hidden="true"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/hiral-aroraa/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
            <span
              className="external-arrow"
              aria-hidden="true"
            />
          </a>

          <a href="#projects">
            things i've made
            <span
              className="down-arrow"
              aria-hidden="true"
            >
              ↓
            </span>
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="portrait-wrap">
          <div className="bubble-border">
            <div className="bubble-border-inner">
              <img
                src="/images/hiral-portrait.jpeg"
                alt="Hiral Arora"
                className="hero-photo"
              />
            </div>
          </div>

          <div className="photo-meta">
            <span>HIRAL-ARORA</span>
            <span>DAVIS, CA</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;