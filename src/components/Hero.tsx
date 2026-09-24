function Hero() {
  return (
    <div className="hero">
      <div className="hero-copy">

        <p className="hero-status">
          <span />
          localhost: running on iced coffee & a new side project ☁️
        </p>

        <h1 className="hero-greeting">
          heyy, I'm Hiral!
        </h1>

        <p className="hero-intro">
          Computer Science + Electrical Engineering student @ UC Davis.
          <br />
          i'm into building software, experimenting with ML models
          <br />
          Sometimes, i mess around with wires and sensors on hardware projects!
        </p>

        <p className="hero-thought">
          i love seeing something cool and thinking{" "}
          <span>“wait... i shd make that?”</span>
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
            <span>SOFTWARE ENGINEER (aspiring lol)</span>
            <span>Davis, CA</span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;