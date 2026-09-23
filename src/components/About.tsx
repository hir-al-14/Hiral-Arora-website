function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="about-gallery" role="img" aria-label="Personal photo wall coming soon" />
      <div className="about-copy">
        <p className="about-label">01 / about me</p>
        <h2 id="about-heading">a little curiosity,<br />a lot of side quests.</h2>
        <p>I'm a CS + EE student at UC Davis. Most of my favorite projects start with something small that I can't quite leave alone. A question turns into an experiment, and suddenly I've spent the evening making it work.</p>
        <p>I like teaching software to make sense of things — an image, a question, a recommendation that actually fits. Sometimes that means writing code. Sometimes it means a sensor, a breadboard, and a desk full of wires.</p>
        <p>Away from my laptop, I'm usually out inline skating, taking photos of things I almost walked past, or finding somewhere to get coffee. A few bits of that life will live on this wall.</p>
        <p className="about-footnote"><span>currently:</span> resisting the urge to start another side project</p>
      </div>
    </section>
  );
}

export default About;
