import SectionHeading from "./SectionHeading";

function About() {
  return (
    <section
      className="content-section about"
      id="about"
    >
      <SectionHeading
        number="04"
        title="about me"
      />

      <div className="about-layout">
        <div className="about-copy">
          <p>
            I'm a <strong>CS + EE student at UC Davis</strong>,
            interested in software engineering, machine learning,
            and building things somewhere in between.
          </p>

          <p>
            Lately I've been working with retrieval systems,
            computer vision, recommendation systems, and AI agents —
            mostly turning ideas into things people can actually use.
          </p>

          <p>
            I also occasionally fall down the hardware rabbit hole:
            tiny computers, sensors, Arduinos, ESPs, and whatever
            else gives me an excuse to build something physical.
          </p>
        </div>

        <aside className="about-side">
          <div>
            <span>currently into</span>

            <p>
              graph ML · security · hardware · photography
            </p>
          </div>

          <div>
            <span>away from keyboard</span>

            <p>
              inline skating · coffee spots · labradors
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default About;