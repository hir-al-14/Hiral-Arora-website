import raspberryPi from "../assets/raspberry-pi-4b.svg";

const projects = [
  {
    title: "Backpack Weight Monitor",
    image: "/images/hardware/backpack-monitor.png",
    alt: "UC Davis team poster showing the backpack weight monitor circuit, design, and test results",
    label: "Arduino · working prototype",
    description: "A strap-mounted pressure sensor system that checks backpack load against a user-set limit, with an LCD readout and buzzer alerts.",
  },
  {
    title: "Cyberdeck",
    image: "",
    alt: "",
    label: "Raspberry Pi · in progress",
    description: "A personal touchscreen cyberdeck with an animated dog companion. Bringing wardrobe, tasks, and GitHub activity together with my own day-planning algorithm.",
  },
];

export default function Hardware() {
  return (
    <section className="hardware" id="hardware" aria-labelledby="hardware-heading">
      <div className="hardware-inner">
        <div className="hardware-heading"><h2 id="hardware-heading">Hardware</h2></div>
        <div className="hardware-workbench">
          <svg className="hardware-cables" viewBox="0 0 1200 420" preserveAspectRatio="none" aria-hidden="true">
            <path className="hardware-cable-shadow" d="M515 220C460 220 495 340 432 340S405 185 350 185M685 155C750 155 690 65 760 65S790 210 850 210" />
            <path className="hardware-cable" d="M515 220C460 220 495 340 432 340S405 185 350 185" />
            <path className="hardware-cable" d="M685 155C750 155 690 65 760 65S790 210 850 210" />
          </svg>
          {projects.map((project, index) => (
            <article className={`hardware-project hardware-project-${index}`} key={project.title}>
              {project.image ? (
                <a className="hardware-image" href={project.image} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} poster`}>
                  <img src={project.image} alt={project.alt} loading="lazy" />
                </a>
              ) : null}
              <p className="hardware-label">{project.label}</p>
              <h3>{project.title}</h3>
              <p className="hardware-description">{project.description}</p>
            </article>
          ))}
          <figure className="hardware-board">
            <div className="hardware-board-case">
              <span className="hardware-board-brand">RASPBERRY PI </span>
              <div className="hardware-board-window"><img src={raspberryPi} alt="Raspberry Pi board illustration, positioned vertically" width="376" height="269" /></div>
            </div>
            <figcaption><a href="https://commons.wikimedia.org/wiki/File:RaspberryPi_Model_4B.svg" target="_blank" rel="noreferrer">Board: Jstrom99 / Efa</a> · <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noreferrer">CC BY-SA 4.0</a><br />Background removed · rotated</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
