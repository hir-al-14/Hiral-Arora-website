function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-status">
          <span />
          currently building
        </p>

        <h1>
          heyy, i'm Hiral.
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
            see my work ↓
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;