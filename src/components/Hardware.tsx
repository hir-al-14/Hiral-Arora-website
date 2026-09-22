import SectionHeading from "./SectionHeading";

const experiments = [
  {
    id: "HW.01",
    name: "safety wearable",
    description:
      "Arduino prototype using force and tilt sensing to detect unsafe conditions in real time.",
    parts: ["Arduino", "FSR", "tilt sensor", "LCD"],
    status: "prototype",
  },
  {
    id: "HW.02",
    name: "computer vision experiments",
    description:
      "Small camera-based experiments combining pose estimation, OpenCV, and physical interaction.",
    parts: ["OpenCV", "MediaPipe", "camera"],
    status: "ongoing",
  },
  {
    id: "HW.03",
    name: "tiny computers + sensors",
    description:
      "An excuse to keep experimenting with ESPs, sensors, displays, and eventually a cyberdeck.",
    parts: ["ESP32", "sensors", "displays"],
    status: "always tinkering",
  },
];

function Hardware() {
  return (
    <section
      className="content-section hardware"
      id="hardware"
    >
      <SectionHeading
        number="03"
        title="hardware"
        description="sometimes software is more fun when there are wires involved."
      />

      <div className="hardware-grid">
        {experiments.map((experiment) => (
          <article
            className="hardware-item"
            key={experiment.id}
          >
            <div className="hardware-meta">
              <span>{experiment.id}</span>

              <span className="hardware-status">
                <i />
                {experiment.status}
              </span>
            </div>

            <h3>{experiment.name}</h3>

            <p>
              {experiment.description}
            </p>

            <div className="hardware-parts">
              {experiment.parts.map((part) => (
                <span key={part}>
                  {part}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Hardware;